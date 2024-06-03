import prismaClient from "../../prisma";

interface productRequest{
    id_categoria: string;
}

class ListByCategoryService{

    async execute({id_categoria}:productRequest) {
        const product = await prismaClient.produto.findMany({
            where:{
                id_categoria : id_categoria
            }
        })

        return product;
    }


}

export {ListByCategoryService}