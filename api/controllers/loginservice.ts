import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send("UserLogin API");
});
router.post('/userlogin', (req: express.Request, res: express.Response) => {
    debugger
    console.log(req.body)
    res.send("UserLogin API");
});

export default router;