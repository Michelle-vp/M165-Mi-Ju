# URL/IP Screenshots
  ![InsertCommand](./Screenshots/3000-Grafana.png)
  ![InsertCommand](./Screenshots/3000-metrics.png)
  ![InsertCommand](./Screenshots/9090-Prometheus.png)
  ![InsertCommand](./Screenshots/9100-metrics.png)
# Cloud Init Explanations
* What are scrapes? Explain the term in the context of Prometheus and give concrete examples.
  In Prometheus we call scrapes to the process of periodically collecting metric data from different monitored targets or services. Prometheus fetches metrics exposed by applications or systems on HTTP endpoints at regular intervals.
Example:

* What are Rules? Explain the term in the context of Prometheus and give concrete examples.
  Rules in Prometheus allow defining alerting conditions and pre-calculated expressions (recording rules) based on metric data. They are useful for simplifying complex queries and generating alerts when certain thresholds or conditions are met.There are two main types:
Recording rules: Save results of frequent queries to reuse later efficiently.
Alerting rules: Define conditions under which alerts will fire.
  Examples:
* What are the steps you need to take as a programmer to store your own data in Prometheus?
 First we expose Metrics, meaning that our application must expose metrics in a Prometheus-compatible format (usually via HTTP on /metrics endpoint). Some example of libraries are Prometheus client libraries (Python, Java, Go, etc.). Then we configure Scraping, we do this by editing the Prometheus configuration file (prometheus.yml) to add our application as a scrape target. And as the last step we restart Prometheus.
Example:

Add your application URL to Prometheus configuration (prometheus.yml):
* Which variables are used in the scrapes and rules and from which pages/URLs do these variables come?
   * Variables used in scrapes:
targets: URL addresses where Prometheus pulls metrics. These URLs serve text-formatted metrics.
Examples:
Prometheus itself: localhost:9090/metrics
Node exporter: localhost:9100/metrics
(This are two screenshots that are attached at the beggining of the document)
    * Variables used in rules:
Prometheus metrics (node_memory_MemFree_bytes, node_memory_MemTotal_bytes, node_filesystem_free_bytes, etc.) are obtained through scrapes from exporters like Node Exporter or custom applications.
The up metric specifically comes from Prometheus itself after attempting scrapes:
up == 1: Target is reachable (scrape successful)
up == 0: Target unreachable (scrape failed)
* How does Prometheus know if a system is up (see rules in the Alerting Rules).
  Prometheus determines system availability using the built-in up metric, automatically generated for each scrape job.
When Prometheus tries to scrape a target:
up = 1: The scrape is successful; the target is "up".
up = 0: The scrape fails (HTTP timeout/error); the target is considered "down".
