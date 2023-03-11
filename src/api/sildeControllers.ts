import Api from '../utils/request'

async function apiDelete(Id: string) {
    let api = Api({
        url: '/Delete',
        method: 'post',
        params: {
            id: Id
        }
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiSelectByName(Name: string) {
    let api = Api({
        url: '/SelectByName',
        method: 'post',
        params: {
            name: Name
        }
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiAddImage(File: FormData, Url: string) {
    let a = File
    let api = await Api({
        url: "/addArticle",
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: {
            a
        },
        transformRequest: [
            function () {
                return a
            }
        ],
        params: {
            url: Url
        }


    }).then((res) => {
        return res;
    });
    return api;
}


async function apiInsertSlide(
    Application: string,
    Charcteristic: string,
    Id: string, Life: string,
    Loads: string, Material: string,
    Model: string, Name: string,
    Section: string, Size: string,
    Specifications: string,
) {
    let api = await Api({
        url: '/InsertSlide',
        method: 'post',
        transformRequest: [function (data) {
            data = JSON.stringify(data)
            return data
        }],
        data: {
            application: Application,
            characteristic: Charcteristic,
            id: Id,
            life: Life,
            loads: Loads,
            material: Material,
            model: Model,
            name: Name,
            section: Section,
            size: Size,
            specifications: Specifications,
        }
    }).then((res) => {
        return res;
    });
    return api;
}


async function apiUpdateSlide(
    Application: string,
    Characteristic: string,
    Id: string, Life: string,
    Loads: string, Material: string,
    Model: string, Name: string,
    Section: string, Size: string,
    Specifications: string,
) {
    let api = await Api({
        url: '/updateSlide',
        method: 'post',
        params: {
            application: Application,
            characteristic: Characteristic,

            id: Id,
            life: Life,
            loads: Loads,
            material: Material,
            model: Model,
            name: Name,
            section: Section,
            size: Size,
            specifications: Specifications,
        }
    }).then((res) => {
        return res;
    });
    ;
    return api;
}


async function apiSelectAll() {
    const api = await Api({
        url: '/SelectAll',
        method: 'post',

    }).then((res) => {
        return res;
    });
    return api;
}

async function apiSelectByAll(S: string) {
    const api = await Api({
        url: '/SelectSlide',
        method: 'post',
        params: {
            s: S
        }

    }).then((res) => {
        return res;
    });
    return api;
}




export {
    apiUpdateSlide,
    apiDelete,
    apiInsertSlide,
    apiSelectAll,
    apiSelectByAll,
    apiSelectByName,
    apiAddImage
}