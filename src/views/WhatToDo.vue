<template>
    <div what-to-do-page>
        <div class="row">
            <div class="col l8">
                <section>
                    <h2>How do I protect myself?</h2>
                    <p>
                        The best thing is
                        <a
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                            target="_blank"
                        >regular and thorough hand washing,</a> preferably with soap and water.
                    </p>
                    <p>Coronavirus spreads when an infected person coughs small droplets - packed with the virus - into the air. These can be breathed in, or cause an infection if you touch a surface they have landed on, then your eyes, nose or mouth.</p>
                    <p>So, coughing and sneezing into tissues, not touching your face with unwashed hands, and avoiding close contact with infected people are important for limiting the spread.</p>
                    <p>
                        <a
                            href="https://www.bbc.co.uk/news/health-51205344"
                            target="_blank"
                        >Face masks do not provide effective protection,</a> according to medical experts.
                    </p>
                    <p>
                        However, the World Health Organization (WHO) is currently looking at
                        <a
                            href="https://www.bbc.co.uk/news/science-environment-52126735"
                            target="_blank"
                        >whether the public might benefit from using face masks.</a>
                    </p>
                    <p>This follows a study suggesting that the virus can travel further in coughs and sneezes than previously thought.</p>

                    <section>
                        <img src="@/assets/img/what-to-do.png" alt="what to do" />
                    </section>
                </section>

                <section class="section">
                    <h2>What are the coronavirus symptoms?</h2>
                    <p>Coronavirus infects the lungs. The two main, key symptoms are a fever and a dry cough, which can in some cases lead to breathing problems.</p>
                    <p>The cough to look out for is a new, continuous cough. This means coughing a lot for more than an hour, or having three or more coughing episodes in 24 hours (and if you usually have a cough, it may be worse than usual).</p>
                    <p>You have a fever if your temperature is above 37.8C. This can make you feel warm, cold or shivery.</p>
                    <p>
                        It takes
                        <a
                            href="https://www.bbc.co.uk/news/health-51800707"
                            target="_blank"
                        >five days on average to start showing the symptoms,</a> scientists have said, but some people will get symptoms much later than this. In fact the World Health Organization (WHO) says the incubation period lasts up to 14 days.
                    </p>
                    <p>
                        A sore throat, headache and diarrhoea have also been reported in some cases and
                        <a
                            href="https://www.bbc.co.uk/news/health-52111606"
                            target="_blank"
                        >a loss of smell and taste may also be a symptom.</a> But these symptoms aren't specific to this coronavirus.
                    </p>
                    <p>
                        <a
                            href="https://www.bbc.co.uk/news/health-52006988"
                            target="_blank"
                        >There is a lot we still don't know about the full range of symptoms</a>.
                    </p>

                    <section class="section">
                        <img src="@/assets/img/symptoms.png" alt="symptoms" />
                    </section>
                </section>

                <section>
                    <span>
                        Original source:
                        <a
                            href="https://www.bbc.com/news/health-51048366"
                            target="_blank"
                        >https://www.bbc.com/news/health-51048366</a>
                    </span>
                </section>
            </div>
            <div class="col l4">
                <section>
                    <img src="@/assets/img/prevent.png" alt="prevent virus" />
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="scss" scoped>
section {
    margin: 25px 0;
}

[what-to-do-page] {
    min-height: 100vh;

    section {
        img {
            width: 100%;
        }

        h2 {
            margin: 10px 0 15px 0;
            font-size: 2.3em;
        }

        p {
            font-size: 1.2em;
            margin: 17px 0px;
        }

        a {
            font-weight: bold;
            color: #333;
            text-decoration: underline;
        }
    }
}
</style>