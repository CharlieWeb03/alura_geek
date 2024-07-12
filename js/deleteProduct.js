// DELETE PRODUCT

import { connectApi } from "./connectApi.js";

async function deleteProduct(productId) {
    try {
        await connectApi.deleteProduct(productId);
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }

    window.location.reload(true);
}

export { deleteProduct };
