import { Container, Title, Categories, SortPopup, TopBar, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>

    <TopBar/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">

        {/* ФИЛЬТРАЦИЯ */}
        <div className="w-[250px]">
        <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
              title="Пиццы" 
              items={[
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
            ]} categoryId={0}/>

            <ProductsGroupList 
              title="Завтрак" 
              items={[
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
            ]} categoryId={0}/>
            </div>
        </div>
      </div>
    </Container>
  </>
}