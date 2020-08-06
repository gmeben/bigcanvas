import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.Certificate('creds.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

data = {

}

db.collection(u'app').document(u'grid').set(data)