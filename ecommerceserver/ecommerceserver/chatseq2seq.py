from __future__ import print_function, division
from builtins import range, input

import os 
import sys
import string
import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 

from keras.models import Model
from keras.layers import Dense, Embedding, Input, LSTM, GRU, Bidirectional, RepeatVector, Concatenate, Activation, Dot, Lambda
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
import keras.backend as K
from keras.optimizers import Adam, SGD

#some configuration
MAX_SEQUENCE_LENGTH = 100
MAX_NUM_WORDS = 20000
EMBEDDING_DIM = 100
BATCH_SIZE = 64
EPOCHS = 1
LATENT_DIMS = 256
LATENT_DIMS_DECODER = 256
NUM_SAMPLES = 10000


def softmax_over_time(x):
    assert(k.ndim(x) > 2)
    e = K.exp(x - K.max(x, axis=1, keepdims=True))
    s = K.sum(e, axis=1, keepdims=True)
    return e / s

