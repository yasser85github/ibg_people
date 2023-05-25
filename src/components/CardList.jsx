export default function CardList({ list }) {
  const listItems = list.map((item) => (
    <li key={item.id}>
      <figure class="md:flex rounded-xl p-8 md:p-0">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={item.image}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{item.name}</div>
            <div class="text-slate-700 dark:text-slate-500">{item.status}</div>
          </figcaption>
        </div>
      </figure>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
