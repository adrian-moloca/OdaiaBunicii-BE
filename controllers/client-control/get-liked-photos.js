import Client from '../../models/client.js';

const likedPhotos = async (req, res, next) => {
  const userID = req.params.uid;
  
  let existingClient;

  try {
    existingClient = await Client.findOne({clientID: userID});
    if(!existingClient) {
        return res.json({
            message: "No client found!",
        })
    }
  } catch (error) {
    return res.status(500).json({
      error
    });
  };

  res.status(200).json({
    message: 'Client found',
    likedPhotos: existingClient.likedPhotos,
  });
};

export default likedPhotos;