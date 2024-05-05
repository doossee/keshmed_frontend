const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/__sitemap__/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/uz/admin/brands",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/brands"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/brands"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/brands"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/brands"
                    }
                ]
            },
            {
                "loc": "/admin/brands",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/brands"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/brands"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/brands"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/brands"
                    }
                ]
            },
            {
                "loc": "/en/admin/brands",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/brands"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/brands"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/brands"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/brands"
                    }
                ]
            },
            {
                "loc": "/uz/admin/categories",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/categories"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/categories"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/categories"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/categories"
                    }
                ]
            },
            {
                "loc": "/admin/categories",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/categories"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/categories"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/categories"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/categories"
                    }
                ]
            },
            {
                "loc": "/en/admin/categories",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/categories"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/categories"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/categories"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/categories"
                    }
                ]
            },
            {
                "loc": "/uz/admin",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin"
                    }
                ]
            },
            {
                "loc": "/admin",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin"
                    }
                ]
            },
            {
                "loc": "/en/admin",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin"
                    }
                ]
            },
            {
                "loc": "/uz/admin/orders",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/orders"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/orders"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/orders"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/orders"
                    }
                ]
            },
            {
                "loc": "/admin/orders",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/orders"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/orders"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/orders"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/orders"
                    }
                ]
            },
            {
                "loc": "/en/admin/orders",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/admin/orders"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/admin/orders"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/admin/orders"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/admin/orders"
                    }
                ]
            },
            {
                "loc": "/uz",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/uz//products",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz//products"
                    },
                    {
                        "hreflang": "ru",
                        "href": "//products"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en//products"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "//products"
                    }
                ]
            },
            {
                "loc": "//products",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz//products"
                    },
                    {
                        "hreflang": "ru",
                        "href": "//products"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en//products"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "//products"
                    }
                ]
            },
            {
                "loc": "/en//products",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz//products"
                    },
                    {
                        "hreflang": "ru",
                        "href": "//products"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en//products"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "//products"
                    }
                ]
            },
            {
                "loc": "/uz/login",
                "_sitemap": "uz",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/login"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/login"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/login",
                "_sitemap": "ru",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/login"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/login"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/en/login",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "uz",
                        "href": "/uz/login"
                    },
                    {
                        "hreflang": "ru",
                        "href": "/login"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/login"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/login"
                    }
                ]
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "ru"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
