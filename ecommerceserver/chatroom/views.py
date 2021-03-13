from rest_framework import viewsets, status
from rest_framework.response import Response
import nltk
from nltk.stem.lancaster import LancasterStemmer
import numpy 
import tflearn
import tensorflow as tf
import random
import json

stemmer = LancasterStemmer()


class IntentRecognition(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        text = request.data['newchat']
        wrds = nltk.word_tokenize(text)
        

