import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/livros',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/livros',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
export const show = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { livro: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    livro: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        livro: typeof args.livro === 'object'
                ? args.livro.id
                : args.livro,
                }

    return show.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show.get = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show.head = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
    const showForm = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
        showForm.get = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
        showForm.head = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
export const update = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { livro: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    livro: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        livro: typeof args.livro === 'object'
                ? args.livro.id
                : args.livro,
                }

    return update.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update.put = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update.patch = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
    const updateForm = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
        updateForm.put = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
        updateForm.patch = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
export const destroy = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
destroy.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { livro: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    livro: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        livro: typeof args.livro === 'object'
                ? args.livro.id
                : args.livro,
                }

    return destroy.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
destroy.delete = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
    const destroyForm = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
        destroyForm.delete = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const livros = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default livros