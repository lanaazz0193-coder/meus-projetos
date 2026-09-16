import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
const indexbcf823bc7c7152b6d555590da6fdd6d6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbcf823bc7c7152b6d555590da6fdd6d6.url(options),
    method: 'get',
})

indexbcf823bc7c7152b6d555590da6fdd6d6.definition = {
    methods: ["get","head"],
    url: '/api/livros',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
indexbcf823bc7c7152b6d555590da6fdd6d6.url = (options?: RouteQueryOptions) => {
    return indexbcf823bc7c7152b6d555590da6fdd6d6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
indexbcf823bc7c7152b6d555590da6fdd6d6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbcf823bc7c7152b6d555590da6fdd6d6.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
indexbcf823bc7c7152b6d555590da6fdd6d6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbcf823bc7c7152b6d555590da6fdd6d6.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
    const indexbcf823bc7c7152b6d555590da6fdd6d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexbcf823bc7c7152b6d555590da6fdd6d6.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
        indexbcf823bc7c7152b6d555590da6fdd6d6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbcf823bc7c7152b6d555590da6fdd6d6.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/livros'
 */
        indexbcf823bc7c7152b6d555590da6fdd6d6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbcf823bc7c7152b6d555590da6fdd6d6.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexbcf823bc7c7152b6d555590da6fdd6d6.form = indexbcf823bc7c7152b6d555590da6fdd6d6Form
    /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
const indexf90904357bfbe6613c27d45a66cf9ca8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf90904357bfbe6613c27d45a66cf9ca8.url(options),
    method: 'get',
})

indexf90904357bfbe6613c27d45a66cf9ca8.definition = {
    methods: ["get","head"],
    url: '/api/projetos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
indexf90904357bfbe6613c27d45a66cf9ca8.url = (options?: RouteQueryOptions) => {
    return indexf90904357bfbe6613c27d45a66cf9ca8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
indexf90904357bfbe6613c27d45a66cf9ca8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf90904357bfbe6613c27d45a66cf9ca8.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
indexf90904357bfbe6613c27d45a66cf9ca8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf90904357bfbe6613c27d45a66cf9ca8.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
    const indexf90904357bfbe6613c27d45a66cf9ca8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexf90904357bfbe6613c27d45a66cf9ca8.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
        indexf90904357bfbe6613c27d45a66cf9ca8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf90904357bfbe6613c27d45a66cf9ca8.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::index
 * @see app/Http/Controllers/LivroController.php:13
 * @route '/api/projetos'
 */
        indexf90904357bfbe6613c27d45a66cf9ca8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf90904357bfbe6613c27d45a66cf9ca8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexf90904357bfbe6613c27d45a66cf9ca8.form = indexf90904357bfbe6613c27d45a66cf9ca8Form

/**
* Multiple routes resolve to \App\Http\Controllers\LivroController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/livros': indexbcf823bc7c7152b6d555590da6fdd6d6,
    '/api/projetos': indexf90904357bfbe6613c27d45a66cf9ca8,
}

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
const storebcf823bc7c7152b6d555590da6fdd6d6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebcf823bc7c7152b6d555590da6fdd6d6.url(options),
    method: 'post',
})

storebcf823bc7c7152b6d555590da6fdd6d6.definition = {
    methods: ["post"],
    url: '/api/livros',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
storebcf823bc7c7152b6d555590da6fdd6d6.url = (options?: RouteQueryOptions) => {
    return storebcf823bc7c7152b6d555590da6fdd6d6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
storebcf823bc7c7152b6d555590da6fdd6d6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebcf823bc7c7152b6d555590da6fdd6d6.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
    const storebcf823bc7c7152b6d555590da6fdd6d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storebcf823bc7c7152b6d555590da6fdd6d6.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/livros'
 */
        storebcf823bc7c7152b6d555590da6fdd6d6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storebcf823bc7c7152b6d555590da6fdd6d6.url(options),
            method: 'post',
        })
    
    storebcf823bc7c7152b6d555590da6fdd6d6.form = storebcf823bc7c7152b6d555590da6fdd6d6Form
    /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/projetos'
 */
const storef90904357bfbe6613c27d45a66cf9ca8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef90904357bfbe6613c27d45a66cf9ca8.url(options),
    method: 'post',
})

storef90904357bfbe6613c27d45a66cf9ca8.definition = {
    methods: ["post"],
    url: '/api/projetos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/projetos'
 */
storef90904357bfbe6613c27d45a66cf9ca8.url = (options?: RouteQueryOptions) => {
    return storef90904357bfbe6613c27d45a66cf9ca8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/projetos'
 */
storef90904357bfbe6613c27d45a66cf9ca8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef90904357bfbe6613c27d45a66cf9ca8.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/projetos'
 */
    const storef90904357bfbe6613c27d45a66cf9ca8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storef90904357bfbe6613c27d45a66cf9ca8.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LivroController::store
 * @see app/Http/Controllers/LivroController.php:21
 * @route '/api/projetos'
 */
        storef90904357bfbe6613c27d45a66cf9ca8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storef90904357bfbe6613c27d45a66cf9ca8.url(options),
            method: 'post',
        })
    
    storef90904357bfbe6613c27d45a66cf9ca8.form = storef90904357bfbe6613c27d45a66cf9ca8Form

/**
* Multiple routes resolve to \App\Http\Controllers\LivroController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/livros': storebcf823bc7c7152b6d555590da6fdd6d6,
    '/api/projetos': storef90904357bfbe6613c27d45a66cf9ca8,
}

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
const show3374af2dfe8ab7672f2d8fd81e229cb2 = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'get',
})

show3374af2dfe8ab7672f2d8fd81e229cb2.definition = {
    methods: ["get","head"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show3374af2dfe8ab7672f2d8fd81e229cb2.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show3374af2dfe8ab7672f2d8fd81e229cb2.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show3374af2dfe8ab7672f2d8fd81e229cb2.get = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
show3374af2dfe8ab7672f2d8fd81e229cb2.head = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
    const show3374af2dfe8ab7672f2d8fd81e229cb2Form = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
        show3374af2dfe8ab7672f2d8fd81e229cb2Form.get = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/livros/{livro}'
 */
        show3374af2dfe8ab7672f2d8fd81e229cb2Form.head = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show3374af2dfe8ab7672f2d8fd81e229cb2.form = show3374af2dfe8ab7672f2d8fd81e229cb2Form
    /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
const showf10dc5ad32c20d19135545b40d294e6e = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'get',
})

showf10dc5ad32c20d19135545b40d294e6e.definition = {
    methods: ["get","head"],
    url: '/api/projetos/{project}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
showf10dc5ad32c20d19135545b40d294e6e.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return showf10dc5ad32c20d19135545b40d294e6e.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
showf10dc5ad32c20d19135545b40d294e6e.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
showf10dc5ad32c20d19135545b40d294e6e.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
    const showf10dc5ad32c20d19135545b40d294e6eForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf10dc5ad32c20d19135545b40d294e6e.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
        showf10dc5ad32c20d19135545b40d294e6eForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf10dc5ad32c20d19135545b40d294e6e.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LivroController::show
 * @see app/Http/Controllers/LivroController.php:30
 * @route '/api/projetos/{project}'
 */
        showf10dc5ad32c20d19135545b40d294e6eForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf10dc5ad32c20d19135545b40d294e6e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf10dc5ad32c20d19135545b40d294e6e.form = showf10dc5ad32c20d19135545b40d294e6eForm

/**
* Multiple routes resolve to \App\Http\Controllers\LivroController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/livros/{livro}': show3374af2dfe8ab7672f2d8fd81e229cb2,
    '/api/projetos/{project}': showf10dc5ad32c20d19135545b40d294e6e,
}

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
const update3374af2dfe8ab7672f2d8fd81e229cb2 = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'put',
})

update3374af2dfe8ab7672f2d8fd81e229cb2.definition = {
    methods: ["put","patch"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update3374af2dfe8ab7672f2d8fd81e229cb2.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update3374af2dfe8ab7672f2d8fd81e229cb2.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update3374af2dfe8ab7672f2d8fd81e229cb2.put = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
update3374af2dfe8ab7672f2d8fd81e229cb2.patch = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/livros/{livro}'
 */
    const update3374af2dfe8ab7672f2d8fd81e229cb2Form = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
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
        update3374af2dfe8ab7672f2d8fd81e229cb2Form.put = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
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
        update3374af2dfe8ab7672f2d8fd81e229cb2Form.patch = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update3374af2dfe8ab7672f2d8fd81e229cb2.form = update3374af2dfe8ab7672f2d8fd81e229cb2Form
    /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/projetos/{project}'
 */
const updatef10dc5ad32c20d19135545b40d294e6e = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'put',
})

updatef10dc5ad32c20d19135545b40d294e6e.definition = {
    methods: ["put","patch"],
    url: '/api/projetos/{project}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/projetos/{project}'
 */
updatef10dc5ad32c20d19135545b40d294e6e.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return updatef10dc5ad32c20d19135545b40d294e6e.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/projetos/{project}'
 */
updatef10dc5ad32c20d19135545b40d294e6e.put = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/projetos/{project}'
 */
updatef10dc5ad32c20d19135545b40d294e6e.patch = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LivroController::update
 * @see app/Http/Controllers/LivroController.php:41
 * @route '/api/projetos/{project}'
 */
    const updatef10dc5ad32c20d19135545b40d294e6eForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef10dc5ad32c20d19135545b40d294e6e.url(args, {
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
 * @route '/api/projetos/{project}'
 */
        updatef10dc5ad32c20d19135545b40d294e6eForm.put = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef10dc5ad32c20d19135545b40d294e6e.url(args, {
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
 * @route '/api/projetos/{project}'
 */
        updatef10dc5ad32c20d19135545b40d294e6eForm.patch = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef10dc5ad32c20d19135545b40d294e6e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef10dc5ad32c20d19135545b40d294e6e.form = updatef10dc5ad32c20d19135545b40d294e6eForm

/**
* Multiple routes resolve to \App\Http\Controllers\LivroController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/livros/{livro}': update3374af2dfe8ab7672f2d8fd81e229cb2,
    '/api/projetos/{project}': updatef10dc5ad32c20d19135545b40d294e6e,
}

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
const destroy3374af2dfe8ab7672f2d8fd81e229cb2 = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'delete',
})

destroy3374af2dfe8ab7672f2d8fd81e229cb2.definition = {
    methods: ["delete"],
    url: '/api/livros/{livro}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
destroy3374af2dfe8ab7672f2d8fd81e229cb2.url = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy3374af2dfe8ab7672f2d8fd81e229cb2.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
destroy3374af2dfe8ab7672f2d8fd81e229cb2.delete = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3374af2dfe8ab7672f2d8fd81e229cb2.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/livros/{livro}'
 */
    const destroy3374af2dfe8ab7672f2d8fd81e229cb2Form = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
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
        destroy3374af2dfe8ab7672f2d8fd81e229cb2Form.delete = (args: { livro: number | { id: number } } | [livro: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy3374af2dfe8ab7672f2d8fd81e229cb2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy3374af2dfe8ab7672f2d8fd81e229cb2.form = destroy3374af2dfe8ab7672f2d8fd81e229cb2Form
    /**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/projetos/{project}'
 */
const destroyf10dc5ad32c20d19135545b40d294e6e = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'delete',
})

destroyf10dc5ad32c20d19135545b40d294e6e.definition = {
    methods: ["delete"],
    url: '/api/projetos/{project}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/projetos/{project}'
 */
destroyf10dc5ad32c20d19135545b40d294e6e.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return destroyf10dc5ad32c20d19135545b40d294e6e.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/projetos/{project}'
 */
destroyf10dc5ad32c20d19135545b40d294e6e.delete = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf10dc5ad32c20d19135545b40d294e6e.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LivroController::destroy
 * @see app/Http/Controllers/LivroController.php:51
 * @route '/api/projetos/{project}'
 */
    const destroyf10dc5ad32c20d19135545b40d294e6eForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyf10dc5ad32c20d19135545b40d294e6e.url(args, {
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
 * @route '/api/projetos/{project}'
 */
        destroyf10dc5ad32c20d19135545b40d294e6eForm.delete = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyf10dc5ad32c20d19135545b40d294e6e.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyf10dc5ad32c20d19135545b40d294e6e.form = destroyf10dc5ad32c20d19135545b40d294e6eForm

/**
* Multiple routes resolve to \App\Http\Controllers\LivroController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/livros/{livro}': destroy3374af2dfe8ab7672f2d8fd81e229cb2,
    '/api/projetos/{project}': destroyf10dc5ad32c20d19135545b40d294e6e,
}

const LivroController = { index, store, show, update, destroy }

export default LivroController