const generateApiInfo = () => {
    return {
      endpoints: [
        '/html1',
        '/html2',
        '/file/:filename',
        '/objects/:type/:id',
        '/objects/:type',
        '/objects',
        '/info',
      ],
      description: 'API documentation - This API provides various endpoints for retrieving HTML pages, files, and object data.',
    };
  };
  
  const getInfo = (req, res) => {
    const apiInfo = generateApiInfo();
    res.json(apiInfo);
  };
  
  module.exports = { getInfo };
  