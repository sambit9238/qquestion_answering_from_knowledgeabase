import random
from collections import Counter
from sentence_transformers import SentenceTransformer, SentenceDataset
from sentence_transformers.losses import TripletLoss
from sentence_transformers.readers import LabelSentenceReader, InputExample
from torch.utils.data import DataLoader

# Load pre-trained model
sbert_model = SentenceTransformer('bert-base-nli-stsb-mean-tokens')

# Set up data for fine-tuning 
