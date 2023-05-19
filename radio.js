// import NodeJS modules 

import http from 'http';

import icy from 'icy';

const musicURL = 'http://media-ice.musicradio.com/ClassicFMMP3';

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'icy-metadata': 1, // Activează metadatele ICY
  });

  const stream = icy.get(musicURL, response => {
    response.on('metadata', metadata => {
      const parsedMetadata = icy.parse(metadata);
      console.log('Metadata:', parsedMetadata);
    });

    response.pipe(res);

    response.on('end', () => {
      console.log('Descărcarea listei de redare a fost finalizată.');
    });
  });

  stream.on('error', error => {
    console.error('Error:', error);
    res.end();
  });
}).listen(8000, () => {
  console.log('Serverul este pornit pe portul 8000');
});
