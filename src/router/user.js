const user_router = [
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views'),
        children:[
            {
                path: 'add',
                name: 'UserAdd',
                component: () => import('@/views/user/add') 
            },
            {
                path: 'list',
                name: 'UserList',
                component: () => import('@/views/user/list') 
            },
        ]
    }
]

export default user_router;