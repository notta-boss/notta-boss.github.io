<template>
    <p>There was a time when seeing a web page update without a reload felt like magic. Today, for modern SaaS applications, it's just expected.</p>
    <p>While not every website needs to be alive (blogs don't need to pulse) application users have been trained by tools like Slack, Linear, and Figma to expect immediacy. In those contexts, if a user has to hit "refresh" to see a status change or a new comment... it just feels wrong.</p>

    <p>But for years, developers have been stuck between two extremes when building these features:</p>
    <ol class="text-left">
        <li><strong>The Enterprise Route:</strong> Great tools like Pusher or Ably that work perfectly but cost a fortune at scale.</li>
        <li><strong>The DIY Route:</strong> Rolling your own Socket.io or Laravel Reverb servers. On paper, this looks cheaper (just throw it on a VPS, right?) but once you factor in redundant infrastructure, Redis, monitoring, and the engineering hours spent debugging connection drops, the "savings" often evaporate. You end up paying more to maintain a distraction than you would for a subscription.</li>
    </ol>

    <p>At <strong>Notta Boss</strong>, we got tired of this tradeoff. We wanted the simplicity and polish of those top-tier enterprise tools, but at a price that actually makes sense for our business model.</p>
    <p>So, in true engineer fashion, we built it ourselves.</p>

    <h3>Meet Notta Socket</h3>

    <picture>
        <source srcset="https://nottasocket.com/images/screenshot-dark.webp" media="(prefers-color-scheme: dark)" />
        <img alt="Notta Socket Screenshot" class="border border-zinc-300/25 rounded-lg" src="https://nottasocket.com/images/screenshot-light.webp" />
    </picture>

    <p><strong>Notta Socket</strong> is a drop-in, serverless WebSocket platform designed for teams of any size who care about craftsmanship, performance, and sensible architecture.</p>

    <p>It is built on a philosophy of <strong>ruthless simplicity</strong>. We stripped away the bloat to focus on the three things that actually make your life easier:</p>
    <ul class="text-left">
        <li><strong>Zero Management:</strong> It's truly serverless. No provisioning, no scaling groups, no 3 AM pager alerts.</li>
        <li><strong>Standard-Based Simplicity:</strong> We didn't invent a new protocol you have to learn. It works with the tools and libraries you already know.</li>
        <li><strong>Flexible Control:</strong> You choose your limits. Our plans are designed to scale with your business logic, not arbitrary tiers that force you to upgrade just because you had one good day of traffic.</li>
    </ul>

    <p>Of course, under the hood, we didn't compromise on the engine. We obsessed over latency, reliability, and visibility so you don't have to.</p>

    <h3>Under the Hood: Built for Scale</h3>

    <p>We didn't just wrap an open-source library and call it a day. Notta Socket is an engineering deep-dive into high-performance architecture.</p>

    <p>To handle massive concurrency without breaking the bank, we engineered a custom stack utilizing:</p>
    <ul class="text-left">
        <li><strong>Ingestion:</strong> We utilize specialized <strong>Redis pipelines</strong> to handle high-throughput message streams. This minimizes the round-trip overhead, keeping latency in the sub-millisecond range even under load.</li>
        <li><strong>Analytics:</strong> Most real-time services give you vague charts. We wanted granular visibility. By leveraging <strong>MySQL partitioning</strong> with composite primary keys and dense storage, we can offer deep, 1-minute bucket analytics without the query drag usually associated with big data.</li>
        <li><strong>Protection:</strong> To ensure stability, we implemented <strong>ZSet Throttling</strong>, a custom rate-limiting engine that handles "noisy neighbors" and blocked items efficiently. It protects the platform (and your app) without introducing latency for legitimate traffic.</li>
    </ul>

    <p>We obsessed over these details because this engine is the heart of the product. We needed it to be robust enough to support our unique business model, one that we believe brings real value to you.</p>
    <p>Unlike other platforms that silo everything, Notta Socket allows you to manage multiple distinct streams (representing completely different products, if you will) under a single workspace umbrella. This gives you centralized billing and management without mixing your data. We built the engine to support that flexibility from day one, so you can structure your projects the way that makes sense for your business, not ours.</p>

    <h3>Why We Built It (The Studio Philosophy)</h3>

    <p>Notta Boss is a software studio. We build products. And like any artisan, we need sharp tools.</p>
    <p>We built Notta Socket because <strong>we</strong> needed it for our upcoming projects. We needed a way to add "live" magic to our apps without spinning up new infrastructure every time and without having an uncomfortable conversation with the finance department about the monthly bill.</p>
    <p>We are our own first customer. That means we rely on it just as much as you do.</p>

    <h3>The Road Ahead</h3>

    <p>Notta Socket is officially live. The lights are on, the API is stable, and the connections are flowing.</p>
    <p>Whether you are building a SaaS, a dashboard, or a collaborative tool, if you are tired of maintaining your own socket infrastructure, come take a look. We've made the migration path incredibly simple and you can swap us in for your existing provider in literally seconds.</p>
    <p>We're just getting started. We've been building in the dark for a while, but now we're ready to make some noise.</p>

    <Link href="https://nottasocket.com">Get Real-Time with Notta Socket</Link>
</template>

<script setup>
    import Link from '../../components/Link.vue';
</script>
