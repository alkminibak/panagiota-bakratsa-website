import Container from "../components/Container";
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
      <section className="bg-background py-20">
        <Container>
          {/* Page title */}
          <div className="lg:pl-16">
            <div className="relative grid max-w-5xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* Decorative flourish
                  Absolute so it does NOT affect title spacing */}
              <div aria-hidden="true" className="relative hidden md:block">
                <img
                  src={servicesTitleAccent}
                  alt=""
                  className="pointer-events-none absolute right-0 top-0 w-[110px] max-w-none translate-x-12 -translate-y-2"
                />
              </div>

              {/* Same typography / vertical position as About page */}
              <h1 className="mb-10 text-4xl font-medium text-brand">
                Υπηρεσίες
              </h1>
            </div>
          </div>

          {/* Main services frame */}
          <div className="lg:pl-16">
            <div className="max-w-6xl">
              {/* Adults */}
              <section
                aria-labelledby="adult-therapy-title"
                className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16"
              >
                {/* Title */}
                <div>
                  <h2
                    id="adult-therapy-title"
                    className="text-3xl font-medium leading-tight text-brand"
                  >
                    Ατομική Ψυχοθεραπεία
                    <span className="block">Ενηλίκων</span>
                  </h2>
                </div>

                {/* Text */}
                <div className="text-lg leading-9 text-text">
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
                className="mt-12 overflow-hidden bg-brand/[0.04] px-8 py-10 md:px-12 ml-12 mr-26"
              >
                <h3
                  id="adult-topics-title"
                  className="text-lg leading-8 text-text"
                >
                  Η ψυχοθεραπεία μπορεί να βοηθήσει σε θέματα όπως:
                </h3>

                <div className="mt-7 grid gap-x-16 md:grid-cols-2">
                  <ul className="space-y-4">
                    {adultTopicsLeft.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-lg leading-8 text-text"
                      >
                        <img
                          src={serviceBullet}
                          alt=""
                          aria-hidden="true"
                          className="mt-[10px] h-4 w-3.5 shrink-0"
                        />

                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 space-y-4 md:mt-0">
                    {adultTopicsRight.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-lg leading-8 text-text"
                      >
                        <img
                          src={serviceBullet}
                          alt=""
                          aria-hidden="true"
                          className="mt-[10px] h-4 w-3.5 shrink-0"
                        />

                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Adults → Adolescents divider */}
              <div aria-hidden="true" className="relative my-8 ml-70 h-[75px]">
                <img
                  src={servicesDividerAdults}
                  alt=""
                  className="pointer-events-none absolute left-0 top-2 h-auto w-[75%] max-w-none"
                />
              </div>

              {/* Adolescents */}
              <section
                aria-labelledby="adolescent-therapy-title"
                className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16"
              >
                {/* Text */}
                <div className="space-y-6 text-lg leading-9 text-text">
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
                <div className="lg:text-right">
                  <h2
                    id="adolescent-therapy-title"
                    className="text-3xl font-medium leading-tight text-brand"
                  >
                    Ατομική Ψυχοθεραπεία
                    <span className="block">Εφήβων</span>
                  </h2>
                </div>
              </section>

              {/* Adolescents → Parents divider */}
              <div aria-hidden="true" className="mt-14 mb-4 flex justify-start">
                <img
                  src={servicesDividerAdolescents}
                  alt=""
                  className="pointer-events-none h-auto w-full max-w-[560px]"
                />
              </div>

              {/* Parents */}
              <section
                aria-labelledby="parents-counselling-title"
                className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16"
              >
                {/* Title */}
                <div>
                  <h2
                    id="parents-counselling-title"
                    className="text-3xl font-medium leading-tight text-brand"
                  >
                    Συμβουλευτική Γονέων
                  </h2>
                </div>

                {/* Text */}
                <div className="space-y-6 text-lg leading-9 text-text">
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
