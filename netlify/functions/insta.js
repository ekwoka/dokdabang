import fetch from 'node-fetch';

export const handler = async (event, context) => {
  let content = await fetch('https://instagram28.p.rapidapi.com/medias?user_id=10182938333&batch_size=20', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'instagram28.p.rapidapi.com',
      'x-rapidapi-key': 'hb9vKm7rQ8mshNBWtAM7bqE4beLLp1rvv56jsnSh6DnftuWvaR'
    }
  })
    .then((response) => response.json())
    .catch((err) => {
      return { statusCode: 500, body: err.toString() };
    });
  let posts = content.data.user.edge_owner_to_timeline_media.edges
    .map((edge) => edge.node)
    .map(({ dimensions, display_url: image, is_video, edge_media_to_comment: comments, edge_media_preview_like: likes, taken_at_timestamp: timestamp }) => ({
      dimensions,
      timestamp,
      image,
      is_video,
      comments: comments.count,
      likes: likes.count
    }));
  return { statusCode: 200, body: JSON.stringify(posts) };
};
