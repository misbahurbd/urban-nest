const PropertyCardSkelton = () => {
  return (
    <article className="flex flex-col rounded-md shadow-lg stroke-black/20">
      <div className="skeleton w-full aspect-[5/4]" />
      <div className="p-5 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl skeleton h-[1em] w-3/4" />
          <p className="text-sm skeleton h-[1em] w-5/6" />
        </div>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xl">
              <p className="skeleton h-[1.6em] w-[1.6em]" />
              <p className="skeleton h-[1.6em] w-[1.6em]" />
            </div>
            <p className="text-xs skeleton h-[1em] w-16" />
          </div>
          <span className="block h-10 w-[1px] bg-neutral-300" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xl">
              <p className="skeleton h-[1.6em] w-[1.6em]" />
              <p className="skeleton h-[1.6em] w-[1.6em]" />
            </div>
            <p className="text-xs skeleton h-[1em] w-16" />
          </div>
          <span className="block h-10 w-[1px] bg-neutral-300" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xl">
              <p className="skeleton h-[1.6em] w-[1.6em]" />
              <p className="skeleton h-[1.6em] w-[1.6em]" />
            </div>
            <p className="text-xs skeleton h-[1em] w-16" />
          </div>
          <span className="block h-10 w-[1px] bg-neutral-300" />
        </div>
      </div>
      <div className="skeleton h-10 rounded-md"></div>
    </article>
  )
}
export default PropertyCardSkelton
