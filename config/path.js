const path_admin = {
    'POST': ['\/insert', '\/insert\/book'],
    'GET': ['\/id','\/getAll','\/get\/book','\/getAll\/books'],
    'UPDATE': ['\/age','\/update\/book\/name'],
    'DELETE': ['\/delete','\/delete\/book']
};

const path_user = {
    'POST': ['\/insert', '\/insert\/book'],
    'GET': ['\/id\/*', '\/get\/book\/*', '\/getAll\/books'],
    'UPDATE': ['\/update\/name/*'],
    'DELETE': ['\/delete\/id\/*']
};

module.exports = {
    path_admin: path_admin,
    path_user: path_user
};