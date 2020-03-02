const path_admin = {
    'POST': {
        'post_admin': 'admin/insert',
        'post_book': 'admin/insert/book'
    },
    'GET': {
        'get_admin': 'admin/id',
        'get_admins': 'admin/getAll',
        'get_book': 'admin/get/book',
        'get_books': 'admin/getAll/books'
    },
    'UPDATE': {
        'update_admin': 'admin/age',
        'update_book': 'admin/update/book/name'
    },
    'DELETE': {
        'delete_admin': 'admin/delete',
        'delete_book': 'admin/delete/book'
    }
};

const path_user = {
    'POST': {
        'post_book': 'user/insert'
    },
    'GET': {
        'get_book': 'user/get/book',
        'get_book': 'user/getAll/books'
    }
};

module.exports = {
    path_admin: path_admin,
    path_user: path_user
};