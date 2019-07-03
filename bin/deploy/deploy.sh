echo "deploying ONLY hosting to dev"
echo $FIREBASE_TOKEN
firebase deploy --token "$FIREBASE_TOKEN" --project "chris-esplin" --only hosting