Implementare un servizio che analizzi le issue github e produca varie metriche, possibilmente con una visualizzazione attraente. Le metriche devono contenere almeno i seguenti campi:

* Tempo di prima risposta (medio e sua distribuzione)
* Tempo di chiusura di un ticket (medio e sua distribuzione)
* Numero di ticket aperti
* Grafico di numero di ticket aperti/chiusi in funzione del tempo

Inoltre, vorremmo rendere possibile eseguire ulteriori query. Il servizio è pensato come applicazione web e possa esporre delle "viste" predefinite ed altre che siano customizzabili dagli utenti.
Esempio di query:

* Issue non commentate (da)
* Issue aperte NON nelle label...
* Issue chiuse senza commento

http://github-tools.github.io/github/docs/3.1.0/

