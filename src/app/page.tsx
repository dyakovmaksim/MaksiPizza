import { Container, Title, Categories, SortPopup, TopBar } from "@/components/shared";

export default function home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />
    </Container>

    <TopBar/>

    <Container className="pb-14">
      <div className="flex gap-[60px]">

        {/* ФИЛЬТРАЦИЯ */}
        <div className="w-[250px]">
        ФИЛЬТРАЦИЯ
        </div>

        {/* Список товаров */}
        <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
            </div>
        </div>
      </div>
    </Container>
  </>
}