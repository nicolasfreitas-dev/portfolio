export function Modal() {
    return (
        <section className="w-10/12 h-5/6 bg-detailColorOneHover absolute inset-x-16 inset-y-1/2 text-base hidden">
            <div className="flex ">
                <div className="w-1/2 h-full bg-detailColorTwo">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquid fuga iure minima magnam. Officia fugiat minima magnam atque tenetur exercitationem dolor cupiditate veniam commodi nostrum nisi quo incidunt repellat possimus hic aperiam qui natus sint cum harum non, in maiores architecto. Quo sunt sit accusamus. Enim illum quibusdam aspernatur!
                </div>
                <div className="w-1/2 bg-detailColorTwo">
                    <h3>TITULO</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum fugiat earum officiis molestiae modi omnis
                        excepturi ducimus veritatis ut iure quae, labore qui
                        facere doloribus quam illum repudiandae debitis cum
                        vitae atque accusantium repellendus quaerat, facilis
                        possimus! Vitae iure recusandae iste? Aspernatur, dolor,
                        nesciunt voluptatem tenetur amet dolores dicta omnis
                        harum recusandae consectetur vero, minus iste quae
                        dignissimos! Architecto officiis magni quisquam debitis
                        accusamus! Dignissimos autem vel illum, modi rerum
                        libero ex est consequatur incidunt voluptate ut,
                        repellat doloremque illo perspiciatis nam aperiam nemo
                        assumenda repudiandae quae perferendis esse saepe
                        consectetur aspernatur. Quas atque, soluta nihil
                        exercitationem quisquam voluptates est!
                    </p>
                    <div>STACKS</div>
                </div>
            </div>
            <div className="flex items-center gap-5 w-full h-16 bg-primaryColor">
                <button className="w-48 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne">
                    <img src="" alt="" />
                    <a href="">DEPLOY</a>
                </button>
                <button className="w-48 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne">
                    <img src="" alt="" />
                    <a href="">GITHUB</a>
                </button>
            </div>
        </section>
    );
}
