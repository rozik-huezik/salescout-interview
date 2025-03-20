async function fetchAll(urls) {
    const requests = urls.map(async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return {
                data,
                status: response.status
            };
        } catch (error) {
            return {
                data: error.message,
                status: 500
            };
        }
    });

    return Promise.all(requests);
}

module.exports = { fetchAll };

module.exports = { fetchAll };
