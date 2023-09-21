import { HeroGetStarted } from '@/components/hero-get-started'

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to our amazing product!
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We really hope that you enjoy it, and use it lots.
            Feel free to share with friends.
          </p>
          <div className="space-x-4">
            <HeroGetStarted />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Dashboard is a fully functional dashboard template.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {new Array(6).fill(null).map((_, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h2 className="font-bold">Feature 1</h2>
                  <p className="text-sm text-muted-foreground">
                    Never lose your thoughts again. Journal automatically saves your
                    entries as you type.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
