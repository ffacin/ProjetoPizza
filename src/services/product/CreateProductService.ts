import prismaClient from "../../prisma";

interface ProductRequest {
    nome: string;
    preco: number; // Certifique-se de que preco é um número
    descricao: string;
    banner: string;
    id_categoria: string;
}

class CreateProductService {
    async execute({ nome, preco, descricao, banner, id_categoria }: ProductRequest) {
        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                preco: preco, // Atribua preco como número
                descricao: descricao,
                banner: banner,
                id_categoria: id_categoria,
            }
        });

        return product;
    }
}

export { CreateProductService };
