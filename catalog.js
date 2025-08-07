// Catalog JavaScript Functionality

// Product Data
const products = [
    {
        id: 1,
        name: "Manzanas Orgánicas Rescatadas",
        description: "Manzanas frescas de cultivo orgánico, perfectas para snacks saludables",
        fullDescription: "Estas manzanas orgánicas fueron rescatadas de productores locales que no pudieron venderlas en el mercado tradicional. Son perfectas para comer crudas, hacer compota o añadir a ensaladas.",
        ingredients: "Manzanas orgánicas 100%",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iMTUiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iODAiIHI9IjE1IiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik05MCAxMjBMMTEwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 4.99,
        currentPrice: 2.49,
        rating: 4.8,
        reviews: 24,
        category: "vegan",
        badge: "Orgánico"
    },
    {
        id: 2,
        name: "Pack Verduras Frescas",
        description: "Mezcla de verduras frescas rescatadas, ideal para ensaladas",
        fullDescription: "Pack completo de verduras frescas rescatadas que incluye lechuga, tomates, pepinos y zanahorias. Todas las verduras son de cultivo local y están en perfecto estado.",
        ingredients: "Lechuga, tomates, pepinos, zanahorias",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTIiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEyIiBmaWxsPSIjN2JlMWExIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEzMCIgcj0iMTIiIGZpbGw9IiM3YmUxYTEiLz4KPHBhdGggZD0iTTgwIDEyMEwxMjAgMTIwTDEwMCAxMDBaIiBmaWxsPSIjM2JjY2E5Ii8+Cjwvc3ZnPgo=",
        originalPrice: 6.99,
        currentPrice: 3.99,
        rating: 4.6,
        reviews: 18,
        category: "vegan",
        badge: "Fresco"
    },
    {
        id: 3,
        name: "Snacks de Frutos Secos",
        description: "Mezcla de frutos secos orgánicos, perfecta para el snack",
        fullDescription: "Deliciosa mezcla de frutos secos orgánicos que incluye almendras, nueces, pasas y semillas de girasol. Un snack nutritivo y saludable.",
        ingredients: "Almendras, nueces, pasas, semillas de girasol",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTAiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEwIiBmaWxsPSIjN2JlMWExIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEzMCIgcj0iMTAiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSI5MCIgcj0iMTAiIGZpbGw9IiM3YmUxYTEiLz4KPHBhdGggZD0iTTgwIDEyMEwxMjAgMTIwTDEwMCAxMDBaIiBmaWxsPSIjM2JjY2E5Ii8+Cjwvc3ZnPgo=",
        originalPrice: 8.99,
        currentPrice: 4.99,
        rating: 4.9,
        reviews: 32,
        category: "vegan",
        badge: "Orgánico"
    },
    {
        id: 4,
        name: "Pan Integral Sin Gluten",
        description: "Pan integral artesanal sin gluten, horneado fresco",
        fullDescription: "Pan integral artesanal elaborado con harinas alternativas sin gluten. Perfecto para personas con intolerancia al gluten que no quieren renunciar al sabor del pan casero.",
        ingredients: "Harina de arroz, harina de almendra, huevos, aceite de oliva, sal",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB4PSI2MCIgeT0iODAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjkwIiByPSI1IiBmaWxsPSIjN2JlMWExIi8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjkwIiByPSI1IiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 5.99,
        currentPrice: 2.99,
        rating: 4.7,
        reviews: 15,
        category: "gluten-free",
        badge: "Sin Gluten"
    },
    {
        id: 5,
        name: "Yogur Vegetal de Almendras",
        description: "Yogur vegetal cremoso de almendras, sin lactosa",
        fullDescription: "Yogur vegetal elaborado con leche de almendras orgánicas. Rico en proteínas y calcio, perfecto para personas veganas o con intolerancia a la lactosa.",
        ingredients: "Leche de almendras, cultivos probióticos, azúcar de caña",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTUiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjE1IiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 3.99,
        currentPrice: 1.99,
        rating: 4.5,
        reviews: 28,
        category: "vegan",
        badge: "Vegano"
    },
    {
        id: 6,
        name: "Smoothie Verde Detox",
        description: "Smoothie verde con espinacas, manzana y jengibre",
        fullDescription: "Smoothie verde detox elaborado con espinacas frescas, manzana verde, jengibre y limón. Rico en vitaminas y minerales, perfecto para empezar el día.",
        ingredients: "Espinacas, manzana verde, jengibre, limón, agua de coco",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTIiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEyIiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 4.99,
        currentPrice: 2.49,
        rating: 4.8,
        reviews: 35,
        category: "vegan",
        badge: "Detox"
    },
    {
        id: 7,
        name: "Plátanos Orgánicos",
        description: "Plátanos maduros de cultivo orgánico, perfectos para batidos",
        fullDescription: "Plátanos orgánicos maduros rescatados de productores locales. Ideales para batidos, postres o comer directamente. Rico en potasio y fibra.",
        ingredients: "Plátanos orgánicos 100%",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPHBhdGggZD0iTTgwIDEyMEwxMjAgMTIwTDEwMCAxMDBaIiBmaWxsPSIjM2JjY2E5Ii8+Cjwvc3ZnPgo=",
        originalPrice: 3.49,
        currentPrice: 1.99,
        rating: 4.6,
        reviews: 22,
        category: "vegan",
        badge: "Orgánico"
    },
    {
        id: 8,
        name: "Pizza Congelada Vegetariana",
        description: "Pizza vegetariana congelada, lista para hornear",
        fullDescription: "Pizza vegetariana congelada con masa artesanal y toppings frescos. Incluye champiñones, pimientos, cebolla y queso mozzarella. Lista para hornear en 15 minutos.",
        ingredients: "Masa de pizza, salsa de tomate, champiñones, pimientos, cebolla, queso mozzarella",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTIiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEyIiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 8.99,
        currentPrice: 4.99,
        rating: 4.4,
        reviews: 16,
        category: "vegetarian",
        badge: "Congelado"
    },
    {
        id: 9,
        name: "Croissants Artesanales",
        description: "Croissants frescos horneados artesanalmente",
        fullDescription: "Croissants artesanales horneados frescos cada mañana. Masa hojaldrada con mantequilla de calidad y un sabor inigualable. Perfectos para el desayuno.",
        ingredients: "Harina de trigo, mantequilla, huevos, leche, azúcar, sal, levadura",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB4PSI2MCIgeT0iODAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgcng9IjUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjkwIiByPSI1IiBmaWxsPSIjN2JlMWExIi8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjkwIiByPSI1IiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 6.99,
        currentPrice: 3.49,
        rating: 4.9,
        reviews: 42,
        category: "vegetarian",
        badge: "Fresco"
    },
    {
        id: 10,
        name: "Helado Vegano de Chocolate",
        description: "Helado vegano de chocolate sin lactosa",
        fullDescription: "Helado vegano elaborado con leche de coco y chocolate negro orgánico. Sin lactosa, sin gluten y sin azúcares añadidos. Cremoso y delicioso.",
        ingredients: "Leche de coco, chocolate negro orgánico, azúcar de coco, vainilla",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTUiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjE1IiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 5.99,
        currentPrice: 2.99,
        rating: 4.7,
        reviews: 31,
        category: "vegan",
        badge: "Vegano"
    },
    {
        id: 11,
        name: "Sopa de Lentejas Congelada",
        description: "Sopa de lentejas casera congelada, lista para calentar",
        fullDescription: "Sopa de lentejas casera elaborada con ingredientes frescos y congelada para mantener su sabor y nutrientes. Rica en proteínas y fibra.",
        ingredients: "Lentejas, cebolla, zanahoria, apio, tomate, especias",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTIiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEyIiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 4.99,
        currentPrice: 2.49,
        rating: 4.5,
        reviews: 19,
        category: "vegan",
        badge: "Congelado"
    },
    {
        id: 12,
        name: "Galletas Sin Gluten",
        description: "Galletas caseras sin gluten, perfectas para celíacos",
        fullDescription: "Galletas caseras elaboradas con harinas alternativas sin gluten. Deliciosas y seguras para personas con celiaquía. Disponibles en varios sabores.",
        ingredients: "Harina de arroz, harina de almendra, mantequilla, azúcar, huevos",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YmUxYTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiYmNhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iMTAiIGZpbGw9IiM3YmUxYTEiLz4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iNzAiIHI9IjEwIiBmaWxsPSIjN2JlMWExIi8+CjxwYXRoIGQ9Ik04MCAxMjBMMTIwIDEyMEwxMDAgMTEwWiIgZmlsbD0iIzNiYmNhOSIvPgo8L3N2Zz4K",
        originalPrice: 3.99,
        currentPrice: 1.99,
        rating: 4.6,
        reviews: 25,
        category: "gluten-free",
        badge: "Sin Gluten"
    }
];

// Cart State
let cart = [];
let currentFilter = 'all';
let currentSort = 'name';
let currentProduct = null;
let currentQuantity = 1;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const userModal = document.getElementById('userModal');
const userAvatar = document.getElementById('userAvatar');
const productModal = document.getElementById('productModal');
const checkoutModal = document.getElementById('checkoutModal');
const qrModal = document.getElementById('qrModal');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

// Setup Event Listeners
function setupEventListeners() {
    // Cart
    cartIcon.addEventListener('click', () => openModal(cartModal));
    
    // User
    userAvatar.addEventListener('click', () => openModal(userModal));
    
    // Search
    searchInput.addEventListener('input', filterProducts);
    
    // Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterProducts();
        });
    });
    
    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterProducts();
    });
    
    // Close modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Modal backdrop
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    
    // Delivery options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            e.target.closest('.option-btn').classList.add('selected');
        });
    });
    
    // Quantity controls
    document.getElementById('decreaseQty').addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            document.getElementById('qtyDisplay').textContent = currentQuantity;
        }
    });
    
    document.getElementById('increaseQty').addEventListener('click', () => {
        currentQuantity++;
        document.getElementById('qtyDisplay').textContent = currentQuantity;
    });
    
    // Add to cart from modal
    document.getElementById('addToCartBtn').addEventListener('click', addToCartFromModal);
}

// Load Products
function loadProducts() {
    const filteredProducts = filterProductsByCategory(products, currentFilter);
    const sortedProducts = sortProducts(filteredProducts, currentSort);
    
    productsGrid.innerHTML = '';
    
    sortedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            ${product.originalPrice > product.currentPrice ? 
                `<div class="discount-badge">-${Math.round((product.originalPrice - product.currentPrice) / product.originalPrice * 100)}%</div>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${product.originalPrice > product.currentPrice ? 
                    `<span class="original-price">€${product.originalPrice.toFixed(2)}</span>` : ''}
                <span class="current-price">€${product.currentPrice.toFixed(2)}</span>
            </div>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} reseñas)</span>
            </div>
            <div class="product-actions">
                <button class="btn-view" onclick="viewProduct(${product.id})">
                    <i class="fas fa-eye"></i>
                    Ver más
                </button>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    Añadir
                </button>
            </div>
        </div>
    `;
    return card;
}

// Generate Stars
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Filter Products
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        return matchesSearch && matchesFilter;
    });
    
    const sortedProducts = sortProducts(filteredProducts, currentSort);
    displayProducts(sortedProducts);
}

// Filter by Category
function filterProductsByCategory(products, filter) {
    if (filter === 'all') return products;
    return products.filter(product => product.category === filter);
}

// Sort Products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch (sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'price-low':
            return sorted.sort((a, b) => a.currentPrice - b.currentPrice);
        case 'price-high':
            return sorted.sort((a, b) => b.currentPrice - a.currentPrice);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// View Product
function viewProduct(productId) {
    currentProduct = products.find(p => p.id === productId);
    currentQuantity = 1;
    
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalProductImage').src = currentProduct.image;
    document.getElementById('modalOriginalPrice').textContent = `€${currentProduct.originalPrice.toFixed(2)}`;
    document.getElementById('modalCurrentPrice').textContent = `€${currentProduct.currentPrice.toFixed(2)}`;
    document.getElementById('modalDescription').textContent = currentProduct.fullDescription;
    document.getElementById('modalIngredients').innerHTML = `
        <h5>Ingredientes:</h5>
        <p>${currentProduct.ingredients}</p>
    `;
    document.getElementById('qtyDisplay').textContent = currentQuantity;
    
    openModal(productModal);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showCartAnimation();
}

// Add to Cart from Modal
function addToCartFromModal() {
    if (currentProduct) {
        const existingItem = cart.find(item => item.id === currentProduct.id);
        
        if (existingItem) {
            existingItem.quantity += currentQuantity;
        } else {
            cart.push({
                ...currentProduct,
                quantity: currentQuantity
            });
        }
        
        updateCartCount();
        showCartAnimation();
        closeModal(productModal);
    }
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show Cart Animation
function showCartAnimation() {
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Open Checkout
function openCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    updateCheckoutSummary();
    closeModal(cartModal);
    openModal(checkoutModal);
}

// Update Checkout Summary
function updateCheckoutSummary() {
    const summaryItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    summaryItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.currentPrice * item.quantity;
        total += itemTotal;
        
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>€${itemTotal.toFixed(2)}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });
    
    checkoutTotal.textContent = `€${total.toFixed(2)}`;
}

// Update Cart Display
function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.currentPrice * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">€${item.currentPrice.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `€${total.toFixed(2)}`;
}

// Update Cart Quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartCount();
        updateCartDisplay();
    }
}

// Open Modal
function openModal(modal) {
    if (modal === cartModal) {
        updateCartDisplay();
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Handle Delivery Option
function handleDeliveryOption(option) {
    if (option === 'delivery') {
        // Simulate API call
        alert('Conectando con servicio de delivery...\nTu pedido será entregado en 30-45 minutos.');
        closeModal(checkoutModal);
    } else if (option === 'pickup') {
        closeModal(checkoutModal);
        openModal(qrModal);
    }
}

// Generate QR Code (simplified)
function generateQRCode() {
    const qrCode = document.getElementById('qrCode');
    qrCode.innerHTML = `
        <div style="width: 100%; height: 100%; background: #000; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center; padding: 16px;">
            GTS-2024-001<br>
            QR Code
        </div>
    `;
}

// Initialize QR Code when modal opens
document.getElementById('qrModal').addEventListener('show', generateQRCode);

// Add delivery option handlers
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const option = e.target.closest('.option-btn').dataset.option;
        handleDeliveryOption(option);
    });
}); 