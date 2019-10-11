const router = require('express').Router();
const Resources = require('../models/resource-model');

router.get('/', async (req, res) => {
    let resources = await Resources.getResources();
    res.status(200).json(resources);
});

router.post('/', validateResource, async (req, res, next) => {
    let resource = req.body;
    try {
        let newResource = await Resources.addResource(resource);
        res.status(200).json(newResource);
    } catch (err) {
        next(err);
    }
});

//
//Middleware
function validateResource(req, res, next) {
    let resource = req.body;
    if (!resource || !resource.resource_name) {
        next('Missing parameters');
    }
    next();
}

module.exports = router;
