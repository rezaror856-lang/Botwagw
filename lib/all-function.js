const fs = require('fs');
const toMs = require("ms");
const nama_path_addpay = './database/payment.json';
const nama_path_addlist = './database/list.json'
function normalizeKey(key) {
  return key?.toLowerCase().trim();
}
function addResponList(groupID, key, response, isImage, image_url, _db) {
  var obj_add = {
    id: groupID,
    key: normalizeKey(key),
    response,
    isImage,
    image_url
  }
  _db.push(obj_add)
  fs.writeFileSync(nama_path_addlist, JSON.stringify(_db, null, 3))
}

function getDataResponList(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && normalizeKey(_db[x].key) === normalizeKey(key)) {
      position = x
    }
  })
  return position !== null ? _db[position] : undefined
}

function isAlreadyResponList(groupID, key, _db) {
  return _db.some((x) => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
}

function sendResponList(groupId, key, _dir) {
  let position = null
  Object.keys(_dir).forEach((x) => {
    if (_dir[x].id === groupId && normalizeKey(_dir[x].key) === normalizeKey(key)) {
      position = x
    }
  })
  return position !== null ? _dir[position].response : undefined
}

function isAlreadyResponListGroup(groupID, _db) {
  return _db.some((x) => x.id === groupID)
}

function delResponList(groupID, key, _db) {
  let position = _db.findIndex(x => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db.splice(position, 1)
    fs.writeFileSync(nama_path_addlist, JSON.stringify(_db, null, 3))
  }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
  let position = _db.findIndex(x => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db[position].response = response
    _db[position].isImage = isImage
    _db[position].image_url = image_url
    fs.writeFileSync(nama_path_addlist, JSON.stringify(_db, null, 3))
  }
}

function addResponPay(groupID, key, response, isImage, image_url, _db) {
  var obj_add = {
    id: groupID,
    key: normalizeKey(key),
    response,
    isImage,
    image_url
  }
  _db.push(obj_add)
  fs.writeFileSync(nama_path_addpay, JSON.stringify(_db, null, 3))
}

function getDataResponPay(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && normalizeKey(_db[x].key) === normalizeKey(key)) {
      position = x
    }
  })
  return position !== null ? _db[position] : undefined
}

function isAlreadyResponPay(groupID, key, _db) {
  return _db.some((x) => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
}

function sendResponPay(groupId, key, _dir) {
  let position = null
  Object.keys(_dir).forEach((x) => {
    if (_dir[x].id === groupId && normalizeKey(_dir[x].key) === normalizeKey(key)) {
      position = x
    }
  })
  return position !== null ? _dir[position].response : undefined
}

function isAlreadyResponPayGroup(groupID, _db) {
  return _db.some((x) => x.id === groupID)
}

function delResponPay(groupID, key, _db) {
  let position = _db.findIndex(x => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db.splice(position, 1)
    fs.writeFileSync(nama_path_addpay, JSON.stringify(_db, null, 3))
  }
}

function updateResponPay(groupID, key, response, isImage, image_url, _db) {
  let position = _db.findIndex(x => x.id === groupID && normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db[position].response = response
    _db[position].isImage = isImage
    _db[position].image_url = image_url
    fs.writeFileSync(nama_path_addpay, JSON.stringify(_db, null, 3))
  }
}

function addResponTesti(key, response, isImage, image_url, _db) {
  _db.push({
    key: normalizeKey(key),
    response,
    isImage,
    image_url
  })
  fs.writeFileSync('./database/list-testi.json', JSON.stringify(_db, null, 3))
}

function getDataResponTesti(key, _db) {
  return _db.find(x => normalizeKey(x.key) === normalizeKey(key))
}

function isAlreadyResponTesti(key, _db) {
  return _db.some(x => normalizeKey(x.key) === normalizeKey(key))
}

function sendResponTesti(key, _dir) {
  let data = _dir.find(x => normalizeKey(x.key) === normalizeKey(key))
  return data ? data.response : undefined
}

function delResponTesti(key, _db) {
  let position = _db.findIndex(x => normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db.splice(position, 1)
    fs.writeFileSync('./database/list-testi.json', JSON.stringify(_db, null, 3))
  }
}

function updateResponTesti(key, response, isImage, image_url, _db) {
  let position = _db.findIndex(x => normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db[position].response = response
    _db[position].isImage = isImage
    _db[position].image_url = image_url
    fs.writeFileSync('./database/list-testi.json', JSON.stringify(_db, null, 3))
  }
}
function addResponProduk(key, response, isImage, image_url, _db) {
  _db.push({
    key: normalizeKey(key),
    response,
    isImage,
    image_url
  })
  fs.writeFileSync('./database/list-produk.json', JSON.stringify(_db, null, 3))
}

function getDataResponProduk(key, _db) {
  return _db.find(x => normalizeKey(x.key) === normalizeKey(key))
}

function isAlreadyResponProduk(key, _db) {
  return _db.some(x => normalizeKey(x.key) === normalizeKey(key))
}

function sendResponProduk(key, _dir) {
  let data = _dir.find(x => normalizeKey(x.key) === normalizeKey(key))
  return data ? data.response : undefined
}

function delResponProduk(key, _db) {
  let position = _db.findIndex(x => normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db.splice(position, 1)
    fs.writeFileSync('./database/list-produk.json', JSON.stringify(_db, null, 3))
  }
}

function updateResponProduk(key, response, isImage, image_url, _db) {
  let position = _db.findIndex(x => normalizeKey(x.key) === normalizeKey(key))
  if (position !== -1) {
    _db[position].response = response
    _db[position].isImage = isImage
    _db[position].image_url = image_url
    fs.writeFileSync('./database/list-produk.json', JSON.stringify(_db, null, 3))
  }
}

const isSetDone = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetDone = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_done.json', JSON.stringify(_db, null, 3))
    }
}

const addSetDone = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_done.json', JSON.stringify(_db, null, 3))
}

const removeSetDone = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_done.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetDone = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position].text
    }
}

const isSetProses = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetProses = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
    }
}

const addSetProses = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
}

const removeSetProses = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetProses = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position].text
    }
}
const addSewaGroup = (gid, expired, _dir) => {
  const obj = { id: gid, waktu: expired, expired: Date.now() + toMs(expired), status: true };
  _dir.push(obj);
  fs.writeFileSync("./database/sewa.json", JSON.stringify(_dir, null, 2));
};
const expiredCheck = (conn, _dir) => {
  setInterval(() => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
      if (Date.now() >= _dir[i].expired) {
        position = i;
      }
    });
    if (position !== null) {
      console.log(`Waktu Sewa selesai > ${_dir[position].id}`);
        conn.sendMessage(_dir[position].id, { text: `「 *WAKTU SEWA HABIS* 」\n\nTrimakasih sudah order\nMohon maaf jika bot melakukan kesalahan, order lagi silahkan chat owner`, })
        .then(async (res) => {
          await conn.groupLeave(_dir[position].id);
          _dir.splice(position, 1);
          fs.writeFileSync(
            "./database/sewa.json",
            JSON.stringify(_dir, null, 2)
          );
        });
    }
  }, 1000);
};
const getSewaPosition = (gid, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === gid) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getSewaExpired = (gid, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === gid) {
      position = i;
    }
  });
  if (position !== null) {
    return _dir[position].expired;
  }
};

const checkSewaGroup = (gid, _dir) => {
  let status = false;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === gid) {
      status = true;
    }
  });
  return status;
};


module.exports = { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList, addResponTesti,
    addResponPay,
delResponPay,
isAlreadyResponPay,
isAlreadyResponPayGroup,
sendResponPay,
updateResponPay,
getDataResponPay,
addResponTesti,
delResponTesti,
    isAlreadyResponTesti,
    sendResponTesti,
    updateResponTesti,
    getDataResponTesti,
addResponProduk,
    delResponProduk,
    isAlreadyResponProduk,
    sendResponProduk,
    updateResponProduk,
    getDataResponProduk,
 isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  expiredCheck,
  checkSewaGroup }