/**
 * Created by Administrator on 2015/12/16.
 */

var fileTransfer = require('./fileTransfer');

function downloadMgr(req, res){

    console.log('user download request');

    var transfer = new fileTransfer(req, res);

    var filePath = '‪F:/TDDOWNLOAD/VirtualBox-5.0.10-104061-Win.exe';

    transfer.Download(filePath);

}


module.exports = downloadMgr;
