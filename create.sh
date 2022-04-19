docker create \
    --name=mathbotcontainer \
    --env-file=.env \
    --restart unless-stopped \
    mathbot