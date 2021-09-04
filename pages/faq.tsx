// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Open Samurai?</h3>
          <p>
            Open Samurai is a collection of 8,000 unique bags of Open Samurai gear,
            originally released by{" "}
            <a
              href="https://twitter.com/cotlage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assune.Eth
            </a>
           
          </p>
          <p>
            Open Samurai is an unaudited project. Kaban #1 to #7777 were claimable by
            anyone and #7778 to #8000 are currently reserved for the contract
            deployer.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is Open Samurai so special?</h3>
          <p>
            Open Samurai is unique—the second project of its kind, first with this content. With no company, art,
            team, or attributes, Open Samurai makes it impossible to gate-keep any
            creative decisions (h/t{" "}
            
          </p>
          <p>
            Open Samurai is the unfiltered, uncensorable building block for stories,
            experiences, games, and more, in the hands of the community, at no
            cost. Open Samurai pursues complete decentralization from day one.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Open Samurai?</h3>
          <p>
            Yes, you are free to use Open Samuria in any way you want. For inspiration,
            see existing{" "}
            <Link href="/resources">
              <a>resources</a>
            </Link>{" "}
            put together by the community.
          </p>
        </div>

    

        {/* How do I value loot bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value Open Samurai Kaban ?</h3>
          <p>
            They say that value is always in the eye of the beholder. Open Samurai is no
            different, with no explicit rarities specified at launch. How you
            value a Open Samurai Kaban is up to you.
          </p>
        
          <p>Remember, use your own discretion when valuing a Open Samurai Kaban.</p>
        </div>
      </div>
    </Layout>
  );
}
