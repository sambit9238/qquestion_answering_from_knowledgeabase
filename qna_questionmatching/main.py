from fastapi import FastAPI
from pydantic import BaseModel
from inference import sbert_model, get_cosine_similarity
import torch
from macros import REF_QUE_ANS, REF_ANS
import uvicorn

app = FastAPI()

class QueRequest(BaseModel):
    question: str

model = sbert_model('all-MiniLM-L6-v2')
ref_ques = list(REF_QUE_ANS.keys())
ref_ques_encs = model.encode(ref_ques)


@app.post("/get_answers")
async def get_answers(quereq: QueRequest):
    incoming_question = quereq.question
    incoming_question_enc = model.encode([incoming_question])
    cos_scores = get_cosine_similarity(incoming_question_enc, ref_ques_encs)[0]
    top_k = 1
    top_scorer = torch.topk(cos_scores, k=top_k)
    confidence = int(top_scorer.values[0]*100)
    top_que_match = ref_ques[top_scorer[1][0]]
    answer = REF_ANS[REF_QUE_ANS[top_que_match]]
    result = {'answer': answer, 'confidence': confidence}
    return result
    
if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=5003)