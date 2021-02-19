import React from 'react'
import {GiWorld, GiToolbox, GiBookshelf, GiCloudDownload} from 'react-icons/gi'

export const StatsData = [
    {
        icon: (<GiWorld css={`color: #047bf1`}/>),
        title: "Ponad milion książek w zasobach bilbioteki",
        desc: "Librotuo udostępnia książki z wielu bibliotek na całym świecie"
    },
    {
        icon: (<GiToolbox css={`color: #f3a82e`} />),
        title: "Używa narzędzi google do wyszukiwania książek",
        desc: "Przez co wyszukiwanie książek jest szybkie i przekazuje dużą dostępność zasobów biblioteki"
    },
    {
        icon: (<GiBookshelf css={`color: #f34f2e`}/>),
        title: "Stwórz swój własny regał i wypełnij go książkami",
        desc: "Po zarejestrowaniu konta możesz zapisać dowolną książkę, którą chcesz"
    },
    {
        icon: (<GiCloudDownload css={`color: #3af576`}/>),
        title: "Sprawdź, czy możesz pobrać lub kupić wybraną książkę na innej witrynie internetowej",
        desc: "Librotuo daje możliwość sprawdzenia dostępności książek na innych stronach internetowych"
    },
]