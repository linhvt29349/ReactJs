import { IProducts } from "@/common/products"

type IProduct = {
    data: IProducts
}
const ProductDetail = ({ data }: IProduct) => {
    return (
        <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[10px]">
            <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="h-32 w-full object-cover md:h-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">

                <h2 className="mt-6 font-black uppercase">
                    <span className="text-xl font-black sm:text-5xl lg:text-6xl">
                        {data?.name}
                    </span>

                    <span className="mt-2 block text-sm">Price: {data?.price} Đ</span>
                </h2>

                <a
                    className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                    href=""
                >
                    Add Cart
                </a>
            </div>
        </section>
    )
}
export default ProductDetail
