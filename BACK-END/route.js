const express=require('express')
var qry =require('./crud_query');
const router=express.Router();

router.post('/add',qry.insert);
router.get('/print',qry.show);
router.post('/edit',qry.update);
router.post('/delete',qry.dele);
router.get('/log',qry.view);
module.exports=router;