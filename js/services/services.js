const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
    });

    return await result.json()
}

const getResource = async (url) => {
    const resultMenu = await fetch(url)

    if(!resultMenu.ok){
      throw  new Error(`Ошибка! Мы не сможем обработать ваш запрос ${url}, ошибка ${resultMenu.status}.`)
    }
    
    return await resultMenu.json()
}

export {postData, getResource};