from sentence_transformers import SentenceTransformer, util

class sbert_model(object):
    def __init__(self, model_name):
        self.model_name = model_name
        self.model = SentenceTransformer(self.model_name)
    
    def encode(self, ip: list[str]):
        encoded_ip = self.model.encode(ip, convert_to_tensor = True)
        return encoded_ip
        
        
        
def get_cosine_similarity(tensor1, tensor2):
    return util.cos_sim(tensor1, tensor2)