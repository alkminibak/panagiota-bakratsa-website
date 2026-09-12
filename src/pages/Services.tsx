import Container from "../components/Container";
import AnimatedLine from "../components/AnimatedLine";
import serviceBullet from "../assets/bullet.svg";
import servicesTitleAccent from "../assets/services-title.svg";
import servicesDividerAdults from "../assets/services-divider-adults-alt.svg";
import servicesDividerAdolescents from "../assets/services-divider-adolescents.svg";

const adultTopicsLeft = [
  "άγχος",
  "χαμηλή αυτοεκτίμηση",
  "διαχείριση συναισθημάτων",
  "πένθος",
  "χαμηλή διάθεση",
  "ζητήματα ταυτότητας φύλου",
];

const adultTopicsRight = [
  "φοβίες",
  "δυσκολίες στις διαπροσωπικές σχέσεις",
  "ψυχοσωματικά προβλήματα",
  "σημαντικές αλλαγές ζωής",
  "διατροφικές δυσκολίες και εικόνα σώματος",
];

const Services = () => {
  return (
    <main>
      <section className="bg-background py-12 md:py-14 xl:py-20">
        <Container>
          {/* Page title */}
          <div className="px-8 md:px-12 xl:pl-16 xl:pr-0">
            {/* Mobile */}
            <div className="mb-10 md:hidden">
              <div className="flex items-center gap-2">
                <h1 className="shrink-0 text-[26px] font-medium text-brand">
                  Υπηρεσίες
                </h1>

                <div
                  aria-hidden="true"
                  className="relative h-[42px] w-[145px] shrink-0 overflow-hidden"
                >
                  <AnimatedLine
                    src={servicesDividerAdults}
                    duration={1500}
                    className="pointer-events-none absolute -left-[180px] -top-1 w-[500px] max-w-none"
                  />
                </div>
              </div>
            </div>

            {/* Small tablet */}
            <div className="hidden md:block lg:hidden">
              <h1 className="text-[30px] font-medium text-brand">Υπηρεσίες</h1>
            </div>

            {/* Desktop */}
            <div className="relative hidden max-w-5xl gap-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div aria-hidden="true" className="relative">
                <AnimatedLine
                  src={servicesTitleAccent}
                  duration={1000}
                  delay={700}
                  className="pointer-events-none absolute right-0 top-0 w-[110px] max-w-none translate-x-12 -translate-y-2"
                />
              </div>

              <h1 className="mb-10 text-4xl font-medium text-brand">
                Υπηρεσίες
              </h1>
            </div>
          </div>

          {/* Main services frame */}
          <div className="px-8 md:px-12 xl:pl-16 xl:pr-0">
            <div className="max-w-6xl">
              {/* Adults */}
              <section
                aria-labelledby="adult-therapy-title"
                className="grid gap-5 md:gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12 xl:gap-16"
              >
                {/* Title */}
                <div className="text-left md:text-right lg:text-left">
                  <h2
                    id="adult-therapy-title"
                    className="text-[18px] font-medium leading-tight text-brand md:text-[26px] xl:text-3xl"
                  >
                    Ατομική Ψυχοθεραπεία
                    <span className="block">Ενηλίκων</span>
                  </h2>
                </div>

                {/* Text */}
                <div className="text-[15px] leading-[26px] text-text md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
                  <p>
                    Η ατομική ψυχοθεραπεία ενηλίκων προσφέρει έναν ασφαλή και
                    υποστηρικτικό χώρο, όπου το άτομο μπορεί να κατανοήσει
                    καλύτερα τον εαυτό του, τις ανάγκες του και τον τρόπο με τον
                    οποίο σκέφτεται και συμπεριφέρεται. Μέσα από τη θεραπευτική
                    διαδικασία μπορεί να επεξεργαστεί τις δυσκολίες που
                    αντιμετωπίζει, να ενισχύσει την αυτογνωσία του και να
                    αναζητήσει αλλαγές που θα συμβάλουν στη βελτίωση της
                    καθημερινότητας και της ποιότητας της ζωής του.
                  </p>
                </div>
              </section>

              {/* Adult topics */}
              <section
                aria-labelledby="adult-topics-title"
                className="mx-2 mt-8 overflow-hidden bg-brand/[0.04] px-5 py-6 md:mx-3 md:mt-10 md:px-8 md:py-8 xl:mt-12 xl:ml-12 xl:mr-26 xl:px-12 xl:py-10"
              >
                <h3
                  id="adult-topics-title"
                  className="text-[15px] leading-6 text-text md:text-base md:leading-7 xl:text-lg xl:leading-8"
                >
                  Η ψυχοθεραπεία μπορεί να βοηθήσει σε θέματα όπως:
                </h3>

                <div className="mt-5 grid gap-x-10 md:mt-6 md:grid-cols-2 xl:mt-7 xl:gap-x-16">
                  <ul className="space-y-3 xl:space-y-4">
                    {adultTopicsLeft.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-[15px] leading-6 text-text md:text-base md:leading-7 xl:text-lg xl:leading-8"
                      >
                        <img
                          src={serviceBullet}
                          alt=""
                          aria-hidden="true"
                          className="mt-[7px] h-3 w-3 shrink-0 md:mt-[8px] md:h-3.5 md:w-3.5 xl:mt-[10px] xl:h-4"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-3 space-y-3 md:mt-0 xl:space-y-4">
                    {adultTopicsRight.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-[15px] leading-6 text-text md:text-base md:leading-7 xl:text-lg xl:leading-8"
                      >
                        <img
                          src={serviceBullet}
                          alt=""
                          aria-hidden="true"
                          className="mt-[7px] h-3 w-3 shrink-0 md:mt-[8px] md:h-3.5 md:w-3.5 xl:mt-[10px] xl:h-4"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Adults → Adolescents divider */}
              <div
                aria-hidden="true"
                className="mt-1 mb-10 h-0 md:relative md:mb-8 md:h-[120px] lg:ml-32 lg:h-[75px] xl:ml-70"
              >
                {/* Small tablet only */}
                <AnimatedLine
                  src={servicesDividerAdults}
                  duration={1300}
                  className="pointer-events-none absolute -left-40 top-14 hidden h-auto w-[100%] max-w-none md:block md:[clip-path:inset(0_0_0_30%)] lg:hidden"
                />

                {/* 1024+ unchanged */}
                <AnimatedLine
                  src={servicesDividerAdults}
                  duration={1300}
                  className="pointer-events-none absolute left-0 top-2 hidden h-auto lg:block lg:w-[80%] xl:w-[75%]"
                />
              </div>

              {/* Adolescents */}
              <section
                aria-labelledby="adolescent-therapy-title"
                className="grid gap-5 md:gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12 xl:gap-16"
              >
                {/* Text */}
                <div className="order-2 space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] lg:order-1 xl:text-lg xl:leading-9">
                  <p>
                    Η εφηβεία είναι μια περίοδος σημαντικών αλλαγών, κατά την
                    οποία το άτομο διαμορφώνει σταδιακά την ταυτότητά του,
                    αναζητά μεγαλύτερη αυτονομία και καλείται να ανταποκριθεί σε
                    νέες απαιτήσεις στις σχέσεις, την οικογένεια και το σχολικό
                    περιβάλλον.
                  </p>

                  <p>
                    Η ψυχοθεραπεία μπορεί να προσφέρει στον έφηβο έναν χώρο όπου
                    μπορεί να μιλήσει για όσα τον απασχολούν, να κατανοήσει
                    καλύτερα τον εαυτό του και τα συναισθήματά του και να
                    αναπτύξει τρόπους διαχείρισης των δυσκολιών και των αλλαγών
                    που βιώνει.
                  </p>
                </div>

                {/* Title */}
                <div className="order-1 text-left md:text-right lg:order-2">
                  <h2
                    id="adolescent-therapy-title"
                    className="text-[18px] font-medium leading-tight text-brand md:text-[26px] xl:text-3xl"
                  >
                    Ατομική Ψυχοθεραπεία
                    <span className="block">Εφήβων</span>
                  </h2>
                </div>
              </section>

              {/* Adolescents → Parents divider */}
              <div
                aria-hidden="true"
                className="mt-6 mb-5 md:mt-12 md:mb-5 xl:mt-14 xl:mb-4"
              >
                {/* Mobile: cropped version */}
                <div className="relative h-[55px] w-full overflow-hidden md:hidden">
                  <div className="absolute inset-y-0 left-7 right-4">
                    <AnimatedLine
                      src={servicesDividerAdolescents}
                      duration={1300}
                      reverse
                      className="pointer-events-none absolute left-1 top-1/2 w-[430px] max-w-none -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                {/* Tablet / desktop */}
                <AnimatedLine
                  src={servicesDividerAdolescents}
                  duration={1300}
                  reverse
                  className="pointer-events-none hidden h-auto w-full max-w-[500px] md:block xl:max-w-[560px]"
                />
              </div>

              {/* Parents */}
              <section
                aria-labelledby="parents-counselling-title"
                className="grid gap-5 md:gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12 xl:gap-16"
              >
                {/* Title */}
                <div className="text-left md:text-right lg:text-left">
                  <h2
                    id="parents-counselling-title"
                    className="text-[18px] font-medium leading-tight text-brand md:text-[26px] xl:text-3xl"
                  >
                    Συμβουλευτική Γονέων
                  </h2>
                </div>

                {/* Text */}
                <div className="space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
                  <p>
                    Η συμβουλευτική γονέων προσφέρει έναν χώρο όπου οι γονείς
                    μπορούν να συζητήσουν τις δυσκολίες που αντιμετωπίζουν στη
                    σχέση με το παιδί ή τον έφηβο, καθώς και τις προκλήσεις που
                    μπορεί να προκύπτουν στον γονεϊκό τους ρόλο. Μέσα από τη
                    διαδικασία αυτή μπορούν να κατανοήσουν καλύτερα τις ανάγκες
                    του παιδιού τους, να αναπτύξουν νέες επικοινωνιακές
                    δεξιότητες και να ενισχύσουν τη σύνδεση μαζί του.
                  </p>

                  <p>
                    Η συμβουλευτική μπορεί επίσης να προσφέρει υποστήριξη σε
                    περιόδους αλλαγών και μεταβάσεων στη ζωή της οικογένειας,
                    όπως ένα διαζύγιο, η αλλαγή σχολικού περιβάλλοντος, η
                    είσοδος στην εφηβεία ή η προσθήκη ενός νέου μέλους στην
                    οικογένεια. Στόχος είναι η οικογένεια να μπορεί να
                    προσαρμόζεται στις αλλαγές, διατηρώντας ένα αίσθημα
                    ασφάλειας και σταθερότητας για το σύνολο των μελών της.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;
