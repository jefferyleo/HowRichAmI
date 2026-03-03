// =============================================================================
// TRANSLATIONS
// =============================================================================

const TRANSLATIONS = {

  en: {
    page_title:         'Global Wealth Calculator',
    eyebrow:            'Free Tool · No Sign-up',
    headline_1:         'How Rich Am I,',
    headline_2:         'Really?',
    subheadline:        'See where your income sits on the global wealth spectrum — adjusted for purchasing power and household size.',
    label_income:       'Annual Income',
    placeholder_income: 'e.g. 60,000',
    label_currency:     'Currency',
    label_country:      'Country',
    label_adults:       'Adults in Household',
    label_children:     'Children in Household',
    btn_calculate:      'Calculate My Global Rank →',
    result_label:       'Your global income ranking',
    result_rank_before: 'You are richer than ',
    result_rank_after:  '% of the world',
    result_top_prefix:  'That puts you in the top ',
    result_top_suffix:  '% of the global population',
    gauge_poorest:      'Poorest',
    gauge_avg:          'World Average',
    gauge_richest:      'Richest',
    stat_equiv:         'Equiv. Income',
    stat_intl:          'Intl. Dollars / yr',
    stat_daily:         'Intl. $ / day',
    footer_method:      'Methodology: Square Root equivalization scale · PPP conversion · PIP percentile lookup.',
    footer_source:      'Income distribution: World Bank PIP 2024 (latest available) · PPP rates projected to 2026.',
    footer_learn:       'Learn more',
    err_invalid:        'Please enter a valid positive annual income.',
    err_large:          'Income value seems unrealistically large. Please check your input.',
    ctx_top1:   '<strong>Global 1%.</strong> Your income places you among the world\'s wealthiest individuals. The majority of people on Earth survive on less than $10 per day.',
    ctx_top5:   '<strong>Global top 5%.</strong> You earn significantly more than 95% of the world\'s population. That\'s ~{daily} per day in international purchasing power.',
    ctx_top20:  '<strong>Comfortably ahead.</strong> You earn more than roughly 80% of all people globally. Even modest giving could have an outsized impact for those living on less than $2 a day.',
    ctx_top50:  '<strong>Above the global midpoint.</strong> You are above the global median income of ~$2,500 / year. Billions of people live on far less.',
    ctx_median: '<strong>Near the global median.</strong> You are close to the average global income. The world\'s income distribution is highly unequal at both ends.',
    how_title:        'How is this calculated?',
    how_s1_title:     'Step 1 · Household Adjustment',
    how_s1_body:      'Your income is divided by the square root of household size (adults + children). A couple needs less than 2× a single person\'s income to maintain the same standard of living.',
    how_s2_title:     'Step 2 · PPP Conversion — not the Forex rate',
    how_s2_body:      'We convert your income to International Dollars using Purchasing Power Parity (PPP) — not the bank exchange rate. PPP reflects what your money actually buys locally.',
    how_s2_col_method:'Method',
    how_s2_col_rate:  'Rate',
    how_s2_col_result:'€60,000 converts to',
    how_s2_col_rank:  'Global rank',
    how_s2_ppp:       'PPP (this tool)',
    how_s2_forex:     'Forex rate',
    how_s2_note:      'For the eurozone, PPP and forex rates are close because Europe\'s cost of living is ~85–90% of the US — so both methods produce similar rankings here. The gap is most dramatic for currencies in lower-cost countries (e.g. MYR), where local prices are only ~40% of US levels and the forex rate would severely undercount real purchasing power.',
    how_s3_title:     'Step 3 · Global Percentile Lookup',
    how_s3_body:      'Your International Dollar income is matched against 99 real income thresholds from the World Bank PIP 2024 survey — data covering 8 billion people worldwide.',
    intl_title:       'What is an International Dollar (I$)?',
    intl_intro:       'A hypothetical unit of currency that removes price-level differences between countries, so we can compare real living standards on a level playing field.',
    intl_s1_title:    'A fixed yardstick — the 2017 PPP baseline',
    intl_s1_body:     'One International Dollar (I$) has the same purchasing power as $1 USD had in the United States in 2017. Because prices differ by country and drift over time, anchoring to a fixed reference year makes global income comparisons meaningful and consistent.',
    intl_s2_title:    'Why not just use today\'s US Dollar?',
    intl_s2_body:     'US inflation since 2017 means $1 today buys less than $1 in 2017. Our 2026 USD rate of 1.22 reflects this — you need $1.22 today to match the same basket of goods. Every currency gets its own rate, so local price levels are fully accounted for.',
    intl_col_currency:'Currency',
    intl_col_ppp:     'PPP rate (2026 est.)',
    intl_col_buys:    '1 I$ ≈ local equivalent',
    intl_note:        'Rates below 1 (GBP, EUR) mean the currency is strong — £0.92 buys as much locally as $1 bought in the US in 2017. Rates above 1 (USD, MYR, SGD) mean you need more local currency to match that same purchasing power.',
  },

  es: {
    page_title:         'Calculadora de Riqueza Global',
    eyebrow:            'Gratis · Sin Registro',
    headline_1:         '¿Qué tan Rico',
    headline_2:         'Soy Realmente?',
    subheadline:        'Descubre dónde se sitúa tu ingreso en el espectro global de riqueza — ajustado por poder adquisitivo y tamaño del hogar.',
    label_income:       'Ingreso Anual',
    placeholder_income: 'ej. 60.000',
    label_currency:     'Moneda',
    label_country:      'País',
    label_adults:       'Adultos en el Hogar',
    label_children:     'Niños en el Hogar',
    btn_calculate:      'Calcular mi Posición Global →',
    result_label:       'Tu posición de ingresos global',
    result_rank_before: 'Eres más rico que el ',
    result_rank_after:  '% de la población mundial',
    result_top_prefix:  'Estás en el top ',
    result_top_suffix:  '% de la población mundial',
    gauge_poorest:      'Más pobres',
    gauge_avg:          'Media mundial',
    gauge_richest:      'Más ricos',
    stat_equiv:         'Ingreso equiv.',
    stat_intl:          'Dólares intl. / año',
    stat_daily:         '$ intl. / día',
    footer_method:      'Metodología: Escala raíz cuadrada · Conversión PPA · Tabla de percentiles PIP.',
    footer_source:      'Distribución de ingresos: Banco Mundial PIP 2024 (más reciente) · Tasas PPA proyectadas a 2026.',
    footer_learn:       'Más información',
    err_invalid:        'Por favor, introduce un ingreso anual positivo válido.',
    err_large:          'El valor del ingreso parece demasiado grande. Por favor, verifica tu entrada.',
    ctx_top1:   '<strong>1% global.</strong> Tu ingreso te sitúa entre las personas más adineradas del mundo. La mayoría sobrevive con menos de $10 al día.',
    ctx_top5:   '<strong>Top 5% global.</strong> Ganas significativamente más que el 95% de la población mundial. Eso equivale a ~{daily} al día en poder adquisitivo internacional.',
    ctx_top20:  '<strong>Muy por delante.</strong> Ganas más que aproximadamente el 80% de todas las personas a nivel global. Incluso donaciones modestas podrían tener un impacto enorme para los que viven con menos de $2 al día.',
    ctx_top50:  '<strong>Por encima de la mediana global.</strong> Estás por encima del ingreso mediano global de ~$2.500 / año. Miles de millones viven con mucho menos.',
    ctx_median: '<strong>Cerca de la mediana global.</strong> Tu ingreso está cerca del promedio global. La distribución de ingresos mundial es muy desigual en ambos extremos.',
    how_title:        '¿Cómo se calcula esto?',
    how_s1_title:     'Paso 1 · Ajuste del hogar',
    how_s1_body:      'Tu ingreso se divide por la raíz cuadrada del tamaño del hogar. Una pareja necesita menos del doble del ingreso de una persona sola para mantener el mismo nivel de vida.',
    how_s2_title:     'Paso 2 · Conversión PPA — no la tasa de cambio',
    how_s2_body:      'Convertimos tu ingreso a Dólares Internacionales usando la Paridad de Poder Adquisitivo (PPA) — no la tasa bancaria. La PPA refleja lo que tu dinero realmente compra localmente.',
    how_s2_col_method:'Método',
    how_s2_col_rate:  'Tasa',
    how_s2_col_result:'€60.000 se convierte en',
    how_s2_col_rank:  'Posición global',
    how_s2_ppp:       'PPA (esta herramienta)',
    how_s2_forex:     'Tasa de cambio',
    how_s2_note:      'Para la eurozona, las tasas PPA y forex son similares porque el costo de vida en Europa es ~85–90% del de EE.UU., por lo que ambos métodos producen resultados parecidos. La diferencia es más dramática para monedas de países de bajo costo (p.ej. MYR), donde los precios locales son solo ~40% de los de EE.UU.',
    how_s3_title:     'Paso 3 · Búsqueda de percentil global',
    how_s3_body:      'Tu ingreso en Dólares Internacionales se compara con 99 umbrales reales del Banco Mundial PIP 2024 — datos que cubren 8.000 millones de personas.',
    intl_title:       '¿Qué es un Dólar Internacional (I$)?',
    intl_intro:       'Una unidad monetaria hipotética que elimina las diferencias de nivel de precios entre países, permitiendo comparar el nivel de vida real en igualdad de condiciones.',
    intl_s1_title:    'Un patrón fijo — la base PPA 2017',
    intl_s1_body:     'Un Dólar Internacional (I$) tiene el mismo poder adquisitivo que $1 USD en EE.UU. en 2017. Como los precios varían según el país y cambian con el tiempo, anclar a un año de referencia fijo hace que las comparaciones globales sean significativas.',
    intl_s2_title:    '¿Por qué no usar el Dólar estadounidense actual?',
    intl_s2_body:     'La inflación en EE.UU. desde 2017 hace que $1 hoy compre menos que en 2017. Nuestra tasa USD 2026 de 1,22 lo refleja — se necesitan $1,22 hoy para igualar esa misma cesta de bienes. Cada moneda tiene su propia tasa para reflejar plenamente los niveles de precios locales.',
    intl_col_currency:'Moneda',
    intl_col_ppp:     'Tasa PPA (est. 2026)',
    intl_col_buys:    '1 I$ ≈ equivalente local',
    intl_note:        'Tasas inferiores a 1 (GBP, EUR) indican monedas fuertes. Tasas superiores a 1 (USD, MYR, SGD) indican que se necesita más moneda local para igualar el mismo poder adquisitivo.',
  },

  fr: {
    page_title:         'Calculateur de Richesse Mondiale',
    eyebrow:            'Gratuit · Sans Inscription',
    headline_1:         'Suis-je vraiment',
    headline_2:         'si riche ?',
    subheadline:        'Découvrez où se situe votre revenu dans le spectre de richesse mondial — ajusté selon le pouvoir d\'achat et la taille du foyer.',
    label_income:       'Revenu Annuel',
    placeholder_income: 'ex. 60 000',
    label_currency:     'Devise',
    label_country:      'Pays',
    label_adults:       'Adultes dans le Foyer',
    label_children:     'Enfants dans le Foyer',
    btn_calculate:      'Calculer mon Rang Mondial →',
    result_label:       'Votre classement de revenu mondial',
    result_rank_before: 'Vous êtes plus riche que ',
    result_rank_after:  '% de la population mondiale',
    result_top_prefix:  'Vous êtes dans le top ',
    result_top_suffix:  '% de la population mondiale',
    gauge_poorest:      'Les plus pauvres',
    gauge_avg:          'Moyenne mondiale',
    gauge_richest:      'Les plus riches',
    stat_equiv:         'Revenu équiv.',
    stat_intl:          'Dollars intl. / an',
    stat_daily:         '$ intl. / jour',
    footer_method:      'Méthodologie : Échelle racine carrée · Conversion PPA · Table de percentiles PIP.',
    footer_source:      'Distribution des revenus : Banque mondiale PIP 2024 (dernières données) · Taux PPA projetés à 2026.',
    footer_learn:       'En savoir plus',
    err_invalid:        'Veuillez entrer un revenu annuel positif valide.',
    err_large:          'La valeur du revenu semble irréaliste. Veuillez vérifier votre saisie.',
    ctx_top1:   '<strong>1% mondial.</strong> Votre revenu vous place parmi les personnes les plus aisées au monde. La majorité survit avec moins de 10 $ par jour.',
    ctx_top5:   '<strong>Top 5% mondial.</strong> Vous gagnez nettement plus que 95 % de la population mondiale. C\'est environ {daily} par jour en pouvoir d\'achat international.',
    ctx_top20:  '<strong>Très en avance.</strong> Vous gagnez plus que 80 % de la population mondiale. Même de petits dons pourraient avoir un impact considérable pour ceux vivant avec moins de 2 $ par jour.',
    ctx_top50:  '<strong>Au-dessus de la médiane mondiale.</strong> Vous dépassez le revenu médian mondial de ~2 500 $ / an. Des milliards de personnes vivent avec bien moins.',
    ctx_median: '<strong>Près de la médiane mondiale.</strong> Votre revenu est proche de la moyenne mondiale. La distribution des revenus dans le monde est très inégale.',
    how_title:        'Comment est-ce calculé ?',
    how_s1_title:     'Étape 1 · Ajustement du foyer',
    how_s1_body:      'Votre revenu est divisé par la racine carrée de la taille du foyer. Un couple a besoin de moins du double du revenu d\'une personne seule pour maintenir le même niveau de vie.',
    how_s2_title:     'Étape 2 · Conversion PPA — pas le taux de change',
    how_s2_body:      'Nous convertissons votre revenu en Dollars Internationaux via la Parité de Pouvoir d\'Achat (PPA) — pas le taux bancaire. La PPA reflète ce que votre argent achète réellement localement.',
    how_s2_col_method:'Méthode',
    how_s2_col_rate:  'Taux',
    how_s2_col_result:'€60 000 devient',
    how_s2_col_rank:  'Classement mondial',
    how_s2_ppp:       'PPA (cet outil)',
    how_s2_forex:     'Taux de change',
    how_s2_note:      'Pour la zone euro, les taux PPA et forex sont proches car le coût de la vie en Europe représente ~85–90% de celui des États-Unis — les deux méthodes donnent donc des résultats similaires ici. L\'écart est le plus marqué pour les monnaies des pays à faible coût de la vie (ex. MYR), où les prix locaux ne représentent que ~40% du niveau américain.',
    how_s3_title:     'Étape 3 · Recherche dans le tableau de percentiles',
    how_s3_body:      'Votre revenu en Dollars Internationaux est comparé à 99 seuils réels de la Banque mondiale PIP 2024 — des données couvrant 8 milliards de personnes.',
    intl_title:       'Qu\'est-ce qu\'un Dollar International (I$) ?',
    intl_intro:       'Une unité monétaire hypothétique qui supprime les différences de niveau de prix entre pays, permettant de comparer les niveaux de vie réels sur un pied d\'égalité.',
    intl_s1_title:    'Un étalon fixe — la référence PPA 2017',
    intl_s1_body:     'Un Dollar International (I$) a le même pouvoir d\'achat que $1 USD aux États-Unis en 2017. Les prix variant selon les pays et évoluant dans le temps, s\'ancrer à une année de référence fixe rend les comparaisons mondiales pertinentes.',
    intl_s2_title:    'Pourquoi ne pas utiliser le Dollar américain actuel ?',
    intl_s2_body:     'L\'inflation américaine depuis 2017 signifie que $1 aujourd\'hui achète moins qu\'en 2017. Notre taux USD 2026 de 1,22 le reflète — il faut 1,22 $ aujourd\'hui pour obtenir le même panier de biens. Chaque devise a son propre taux pour tenir pleinement compte des niveaux de prix locaux.',
    intl_col_currency:'Devise',
    intl_col_ppp:     'Taux PPA (est. 2026)',
    intl_col_buys:    '1 I$ ≈ équivalent local',
    intl_note:        'Les taux inférieurs à 1 (GBP, EUR) indiquent des monnaies fortes. Les taux supérieurs à 1 (USD, MYR, SGD) indiquent qu\'il faut plus de monnaie locale pour atteindre le même pouvoir d\'achat.',
  },

  zh: {
    page_title:         '全球财富计算器',
    eyebrow:            '免费工具 · 无需注册',
    headline_1:         '我到底',
    headline_2:         '有多富有？',
    subheadline:        '了解您的收入在全球财富分布中所处的位置 — 已根据购买力平价和家庭规模进行调整。',
    label_income:       '年收入',
    placeholder_income: '例如 60000',
    label_currency:     '货币',
    label_country:      '国家',
    label_adults:       '家庭成人人数',
    label_children:     '家庭儿童人数',
    btn_calculate:      '计算我的全球排名 →',
    result_label:       '您的全球收入排名',
    result_rank_before: '您比全球 ',
    result_rank_after:  '% 的人口更富有',
    result_top_prefix:  '您位于全球前 ',
    result_top_suffix:  '% 的人口之列',
    gauge_poorest:      '最贫穷',
    gauge_avg:          '全球平均',
    gauge_richest:      '最富有',
    stat_equiv:         '等效收入',
    stat_intl:          '国际元 / 年',
    stat_daily:         '国际元 / 天',
    footer_method:      '方法论：平方根等效化标准 · PPP换算 · 世界银行PIP分位数表',
    footer_source:      '收入分布数据：世界银行PIP 2024（最新可用）· PPP汇率预测至2026年',
    footer_learn:       '了解更多',
    err_invalid:        '请输入有效的正数年收入。',
    err_large:          '输入的收入金额过大，请检查您的输入。',
    ctx_top1:   '<strong>全球前1%。</strong> 您的收入使您跻身全球最富裕人群之列。地球上大多数人每天的生活费不足10美元。',
    ctx_top5:   '<strong>全球前5%。</strong> 您的收入远高于全球95%以上的人口。按国际购买力计算，您每天约有 {daily}。',
    ctx_top20:  '<strong>遥遥领先。</strong> 您的收入超过全球约80%的人口。即使是适度的捐赠，也可能对每天生活费不足2美元的人产生巨大影响。',
    ctx_top50:  '<strong>高于全球中位数。</strong> 您的收入超过全球年收入中位数约2,500美元。数十亿人的生活水平远低于此。',
    ctx_median: '<strong>接近全球中位数。</strong> 您的收入接近全球平均水平。全球收入分配在两端极为不平等。',
    how_title:        '这是如何计算的？',
    how_s1_title:     '第1步 · 家庭规模调整',
    how_s1_body:      '您的收入除以家庭人数的平方根（成人＋儿童）。一对夫妇维持相同生活水平所需的收入不到单身人士的两倍。',
    how_s2_title:     '第2步 · PPP换算——而非外汇汇率',
    how_s2_body:      '我们使用购买力平价（PPP）将您的收入换算为国际元——而非银行汇率。PPP反映您的钱在当地的实际购买力。',
    how_s2_col_method:'方式',
    how_s2_col_rate:  '汇率',
    how_s2_col_result:'€60,000 换算为',
    how_s2_col_rank:  '全球排名',
    how_s2_ppp:       'PPP（本工具）',
    how_s2_forex:     '外汇汇率',
    how_s2_note:      '对于欧元区，PPP和外汇汇率相近，因为欧洲的生活成本约为美国的85–90%，因此两种方法得出的排名相似。差距最大的是低成本国家的货币（如马来西亚林吉特），其当地物价仅为美国水平的约40%，此时外汇汇率会严重低估真实购买力。',
    how_s3_title:     '第3步 · 全球分位数查找',
    how_s3_body:      '您的国际元收入将与世界银行PIP 2024数据中的99个真实收入门槛进行比对——该数据涵盖全球80亿人口。',
    intl_title:       '什么是国际元（I$）？',
    intl_intro:       '一种假设货币单位，消除各国之间的价格差异，让我们能够在公平的基础上比较各地的真实生活水平。',
    intl_s1_title:    '固定基准——2017年PPP基准年',
    intl_s1_body:     '1国际元（I$）具有与2017年美国1美元相同的购买力。由于各国价格不同且随时间变化，以固定参考年为锚点使全球收入比较更加有意义且一致。',
    intl_s2_title:    '为什么不直接使用当今的美元？',
    intl_s2_body:     '自2017年以来的美国通胀意味着今天的$1购买力低于2017年。我们2026年美元汇率1.22反映了这一点——今天需要$1.22才能购买同样的商品篮子。每种货币都有其自己的汇率，以充分反映当地价格水平。',
    intl_col_currency:'货币',
    intl_col_ppp:     'PPP汇率（2026年估算）',
    intl_col_buys:    '1国际元 ≈ 当地等值',
    intl_note:        '低于1的汇率（英镑、欧元）表示强势货币。高于1的汇率（美元、林吉特、新元）表示需要更多当地货币才能达到相同的购买力。',
  },

  ms: {
    page_title:         'Kalkulator Kekayaan Global',
    eyebrow:            'Percuma · Tanpa Daftar',
    headline_1:         'Betapa Kayanya',
    headline_2:         'Saya Sebenarnya?',
    subheadline:        'Lihat kedudukan pendapatan anda dalam spektrum kekayaan global — dilaraskan mengikut kuasa beli dan saiz isi rumah.',
    label_income:       'Pendapatan Tahunan',
    placeholder_income: 'cth. 60,000',
    label_currency:     'Mata Wang',
    label_country:      'Negara',
    label_adults:       'Orang Dewasa dalam Isi Rumah',
    label_children:     'Kanak-kanak dalam Isi Rumah',
    btn_calculate:      'Kira Kedudukan Global Saya →',
    result_label:       'Kedudukan pendapatan global anda',
    result_rank_before: 'Anda lebih kaya daripada ',
    result_rank_after:  '% penduduk dunia',
    result_top_prefix:  'Anda berada dalam teratas ',
    result_top_suffix:  '% penduduk global',
    gauge_poorest:      'Termiskin',
    gauge_avg:          'Purata Dunia',
    gauge_richest:      'Terkaya',
    stat_equiv:         'Pendapatan Setara',
    stat_intl:          'Dolar Intl. / tahun',
    stat_daily:         '$ Intl. / hari',
    footer_method:      'Metodologi: Skala punca kuasa dua · Penukaran PPP · Jadual persentil PIP.',
    footer_source:      'Distribusi pendapatan: Bank Dunia PIP 2024 (terkini) · Kadar PPP diunjurkan ke 2026.',
    footer_learn:       'Ketahui lebih lanjut',
    err_invalid:        'Sila masukkan pendapatan tahunan positif yang sah.',
    err_large:          'Nilai pendapatan kelihatan terlalu besar. Sila semak semula input anda.',
    ctx_top1:   '<strong>1% global.</strong> Pendapatan anda menempatkan anda dalam kalangan individu terkaya di dunia. Majoriti penduduk Bumi bertahan dengan kurang daripada $10 sehari.',
    ctx_top5:   '<strong>Teratas 5% global.</strong> Anda memperoleh jauh lebih banyak daripada 95% penduduk dunia. Itu bersamaan dengan ~{daily} sehari dalam kuasa beli antarabangsa.',
    ctx_top20:  '<strong>Jauh ke hadapan.</strong> Anda memperoleh lebih daripada kira-kira 80% penduduk global. Derma yang sederhana sekalipun boleh memberi impak besar kepada mereka yang hidup dengan kurang daripada $2 sehari.',
    ctx_top50:  '<strong>Di atas titik tengah global.</strong> Anda melebihi pendapatan median global ~$2,500 / tahun. Berbilion-bilion orang hidup dengan jauh lebih sedikit.',
    ctx_median: '<strong>Hampir dengan median global.</strong> Pendapatan anda hampir dengan purata global. Pengagihan pendapatan dunia sangat tidak sekata di kedua-dua hujungnya.',
    how_title:        'Bagaimana ia dikira?',
    how_s1_title:     'Langkah 1 · Pelarasan Saiz Isi Rumah',
    how_s1_body:      'Pendapatan anda dibahagi dengan punca kuasa dua saiz isi rumah. Pasangan memerlukan kurang daripada 2× pendapatan individu tunggal untuk mengekalkan taraf hidup yang sama.',
    how_s2_title:     'Langkah 2 · Penukaran PPP — bukan kadar tukaran wang',
    how_s2_body:      'Kami menukar pendapatan anda kepada Dolar Antarabangsa menggunakan Pariti Kuasa Beli (PPP) — bukan kadar bank. PPP mencerminkan apa yang wang anda sebenarnya boleh beli secara tempatan.',
    how_s2_col_method:'Kaedah',
    how_s2_col_rate:  'Kadar',
    how_s2_col_result:'€60,000 menjadi',
    how_s2_col_rank:  'Kedudukan global',
    how_s2_ppp:       'PPP (alat ini)',
    how_s2_forex:     'Kadar tukaran wang',
    how_s2_note:      'Bagi zon euro, kadar PPP dan forex adalah hampir sama kerana kos sara hidup Eropah ~85–90% berbanding AS — jadi kedua-dua kaedah menghasilkan kedudukan yang serupa di sini. Jurang paling besar berlaku untuk mata wang negara berkos rendah (cth. MYR), di mana harga tempatan hanya ~40% daripada paras AS.',
    how_s3_title:     'Langkah 3 · Carian Persentil Global',
    how_s3_body:      'Pendapatan Dolar Antarabangsa anda dibandingkan dengan 99 ambang pendapatan sebenar daripada Bank Dunia PIP 2024 — data meliputi 8 bilion orang di seluruh dunia.',
    intl_title:       'Apakah itu Dolar Antarabangsa (I$)?',
    intl_intro:       'Unit mata wang hipotetikal yang menghapuskan perbezaan tahap harga antara negara, membolehkan perbandingan taraf hidup sebenar secara saksama.',
    intl_s1_title:    'Ukuran tetap — asas PPP 2017',
    intl_s1_body:     'Satu Dolar Antarabangsa (I$) mempunyai kuasa beli yang sama dengan $1 USD di Amerika Syarikat pada 2017. Kerana harga berbeza mengikut negara dan berubah dari masa ke masa, merujuk kepada tahun asas tetap menjadikan perbandingan global bermakna.',
    intl_s2_title:    'Mengapa tidak guna Dolar AS semasa?',
    intl_s2_body:     'Inflasi AS sejak 2017 bermakna $1 hari ini membeli lebih sedikit berbanding 2017. Kadar USD 2026 kami sebanyak 1.22 mencerminkan ini — anda memerlukan $1.22 hari ini untuk mendapatkan bakul barangan yang sama. Setiap mata wang mempunyai kadarnya sendiri bagi mencerminkan tahap harga tempatan.',
    intl_col_currency:'Mata Wang',
    intl_col_ppp:     'Kadar PPP (anggaran 2026)',
    intl_col_buys:    '1 I$ ≈ setara tempatan',
    intl_note:        'Kadar di bawah 1 (GBP, EUR) menunjukkan mata wang yang kuat. Kadar di atas 1 (USD, MYR, SGD) menunjukkan lebih banyak mata wang tempatan diperlukan untuk mencapai kuasa beli yang sama.',
  },

};

// =============================================================================
// STATIC DATA
// =============================================================================

/**
 * PPP conversion factors: local currency units per 1 International Dollar (2017 PPP base).
 * 2024 actuals from World Bank WDI (wdi_ppp.csv, OWID/PabloArriagada).
 * Projected to 2026 via IMF-estimated CPI: US/MY/UK +2.5%/yr, EU/SG +2.0%/yr.
 *   formula: ppp_factor_2024 × (1 + cpi_rate)²
 */
const PPP_RATES = {
  USD: 1.2163,  // 2024 actual: 1.1577
  MYR: 1.7627,  // 2024 actual: 1.6777
  GBP: 0.9198,  // 2024 actual: 0.8755
  EUR: 0.8946,  // 2024 actual: 0.8599 (Germany/Eurozone)
  SGD: 1.2550,  // 2024 actual: 1.2063
};

const CURRENCY_SYMBOLS = {
  USD: '$', MYR: 'RM', GBP: '£', EUR: '€', SGD: 'S$',
};

const CURRENCY_TO_COUNTRY = {
  USD: 'US', MYR: 'MY', GBP: 'GB', EUR: 'EU', SGD: 'SG',
};

const COUNTRY_TO_CURRENCY = {
  US: 'USD', MY: 'MYR', GB: 'GBP', EU: 'EUR', SG: 'SGD',
};

/**
 * Global income distribution thresholds — World Bank PIP 2024 (via OWID).
 * Each value is the DAILY income (International Dollars, 2017 PPP) at the upper
 * boundary of that percentile group. Index 0 = 1st percentile, index 98 = 99th.
 * Source: pip_global_percentiles.csv (github.com/owid/notebooks)
 */
const DAILY_THRESHOLDS = [
   0.92,  1.28,  1.56,  1.81,  2.04,  2.24,  2.44,  2.62,  2.78,  2.94,  //  1–10
   3.10,  3.26,  3.40,  3.54,  3.68,  3.82,  3.96,  4.08,  4.22,  4.34,  // 11–20
   4.46,  4.58,  4.70,  4.84,  4.96,  5.10,  5.20,  5.35,  5.45,  5.60,  // 21–30
   5.70,  5.85,  6.00,  6.15,  6.30,  6.45,  6.60,  6.75,  6.90,  7.10,  // 31–40
   7.25,  7.45,  7.65,  7.85,  8.05,  8.25,  8.45,  8.70,  8.95,  9.20,  // 41–50
   9.45,  9.75, 10.00, 10.30, 10.60, 11.00, 11.30, 11.70, 12.10, 12.50,  // 51–60
  12.90, 13.40, 13.80, 14.30, 14.90, 15.40, 16.00, 16.60, 17.30, 18.00,  // 61–70
  18.70, 19.60, 20.40, 21.30, 22.30, 23.40, 24.60, 25.90, 27.30, 28.80,  // 71–80
  30.40, 32.20, 34.20, 36.30, 38.70, 41.20, 44.00, 47.00, 50.30, 54.10,  // 81–90
  58.20, 62.90, 68.30, 74.70, 82.40, 92.30, 105.10, 124.70, 162.60,      // 91–99
];

// =============================================================================
// MATH
// =============================================================================

/**
 * Returns the global income percentile (0–99.99) for a given annual income,
 * using the World Bank PIP 2024 lookup table with linear interpolation between
 * known thresholds. Above the 99th percentile, log-linear extrapolation is
 * applied using the slope of the last known interval.
 *
 * @param {number} intlDollarsPerYear – annual income in International Dollars (2017 PPP)
 * @returns {number} – % of the global population earning less than this income
 */
function getPercentile(intlDollarsPerYear) {
  const d   = intlDollarsPerYear / 365;  // annual → daily for table lookup
  const thr = DAILY_THRESHOLDS;

  if (d <= 0) return 0;

  // Below 1st percentile: interpolate from 0 to thr[0]
  if (d < thr[0]) return d / thr[0];

  // Within the 99-point table: linear interpolation
  for (let i = 0; i < thr.length - 1; i++) {
    if (d >= thr[i] && d < thr[i + 1]) {
      return (i + 1) + (d - thr[i]) / (thr[i + 1] - thr[i]);
    }
  }

  // Above 99th percentile: log-linear extrapolation from the last interval's slope
  const step = Math.log(thr[98] / thr[97]);
  return Math.min(99.99, 99 + Math.log(d / thr[98]) / step);
}

// =============================================================================
// CORE CALCULATION
// =============================================================================

function calculate({ income, currency, adults, children }) {
  const equivIncome     = income / Math.sqrt(adults + children);   // square-root equivalization
  const intlDollars     = equivIncome / PPP_RATES[currency];       // PPP conversion
  const percentile      = getPercentile(intlDollars);
  const topPercent      = Math.max(0.01, 100 - percentile);

  return { equivIncome, intlDollars, intlDollarsDaily: intlDollars / 365, percentile, topPercent };
}

// =============================================================================
// FORMATTING
// =============================================================================

function formatNumber(val) {
  if (val >= 1e6) return (val / 1e6).toFixed(2) + 'M';
  if (val >= 1e3) return (val / 1e3).toFixed(1) + 'k';
  return val.toFixed(0);
}

function formatCurrency(val, currency) {
  return (CURRENCY_SYMBOLS[currency] || '') + formatNumber(val);
}

function formatIntlDollar(val) {
  if (val >= 1e6) return '$' + (val / 1e6).toFixed(2) + 'M';
  if (val >= 1e3) return '$' + (val / 1e3).toFixed(1) + 'k';
  return '$' + val.toFixed(0);
}

function formatPercentile(p) {
  if (p >= 99.9) return '99.9';
  return p.toFixed(1);
}

function formatTopPercent(t) {
  if (t < 0.1)  return '< 0.1';
  if (t < 1)    return t.toFixed(2);
  if (t < 10)   return t.toFixed(1);
  return t.toFixed(0);
}

// =============================================================================
// I18N
// =============================================================================

let currentLang = localStorage.getItem('gwc_lang') || 'en';

/** Get translated string, with optional {placeholder} substitution */
function t(key, vars) {
  let str = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
         || TRANSLATIONS['en'][key]
         || key;
  if (vars) {
    Object.keys(vars).forEach(k => { str = str.replace('{' + k + '}', vars[k]); });
  }
  return str;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t('page_title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = currentLang;

  // Refresh result text if a calculation is already shown
  if (lastResult) updateResultContent(lastResult, lastCurrency);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('gwc_lang', currentLang);
  applyLanguage();
}

// =============================================================================
// RESULT RENDERING
// =============================================================================

let lastResult   = null;
let lastCurrency = null;

/** Build the context note HTML string for the current language */
function getContextNote(topPercent, intlDollarsDaily) {
  const daily = formatIntlDollar(intlDollarsDaily);
  if (topPercent <= 1)  return t('ctx_top1');
  if (topPercent <= 5)  return t('ctx_top5',  { daily });
  if (topPercent <= 20) return t('ctx_top20');
  if (topPercent <= 50) return t('ctx_top50');
  return t('ctx_median');
}

/** Update all result text — called on calculate AND on language switch */
function updateResultContent({ equivIncome, intlDollars, intlDollarsDaily, percentile, topPercent }, currency) {
  document.getElementById('percentileVal').textContent = formatPercentile(percentile);
  document.getElementById('topText').textContent =
    t('result_top_prefix') + formatTopPercent(topPercent) + t('result_top_suffix');

  document.getElementById('statEquiv').textContent  = formatCurrency(equivIncome, currency);
  document.getElementById('statIntl').textContent   = formatIntlDollar(intlDollars);
  document.getElementById('statDaily').textContent  = '$' + intlDollarsDaily.toFixed(2);
  document.getElementById('contextNote').innerHTML  = getContextNote(topPercent, intlDollarsDaily);
}

/** Full render with fade-in + gauge animation (called on form submit only) */
function renderResult(result, currency) {
  lastResult   = result;
  lastCurrency = currency;

  updateResultContent(result, currency);

  // Fade-in
  const resultEl = document.getElementById('result');
  resultEl.classList.remove('visible');
  void resultEl.offsetHeight; // force reflow
  resultEl.classList.add('visible');

  // Gauge bar
  const gaugeFill = document.getElementById('gaugeFill');
  gaugeFill.style.width = '0%';
  setTimeout(() => {
    gaugeFill.style.width = Math.min(99.5, result.percentile) + '%';
  }, 80);

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =============================================================================
// DOM — EVENT WIRING
// =============================================================================

const form        = document.getElementById('wealthForm');
const incomeInput = document.getElementById('income');
const currencyEl  = document.getElementById('currency');
const countryEl   = document.getElementById('country');
const adultsEl    = document.getElementById('adults');
const childrenEl  = document.getElementById('children');
const errorMsg    = document.getElementById('errorMsg');
const currSymEl   = document.getElementById('currencySymbol');

// Sync currency ↔ country dropdowns
currencyEl.addEventListener('change', () => {
  const country = CURRENCY_TO_COUNTRY[currencyEl.value];
  if (country) countryEl.value = country;
  currSymEl.textContent = CURRENCY_SYMBOLS[currencyEl.value] || '$';
});

countryEl.addEventListener('change', () => {
  const cur = COUNTRY_TO_CURRENCY[countryEl.value];
  if (cur) {
    currencyEl.value = cur;
    currSymEl.textContent = CURRENCY_SYMBOLS[cur] || '$';
  }
});

// Stepper ± buttons
document.querySelectorAll('.stepper button').forEach(btn => {
  btn.addEventListener('click', () => {
    const input  = document.getElementById(btn.dataset.target);
    const newVal = Math.min(+input.max, Math.max(+input.min, +input.value + +btn.dataset.delta));
    input.value  = newVal;
  });
});

// Language switcher dropdown
document.getElementById('langSelect').addEventListener('change', e => {
  setLanguage(e.target.value);
});

// Form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  errorMsg.textContent = '';

  const income   = parseFloat(incomeInput.value);
  const currency = currencyEl.value;
  const adults   = parseInt(adultsEl.value, 10);
  const children = parseInt(childrenEl.value, 10);

  if (!income || isNaN(income) || income <= 0) {
    errorMsg.textContent = t('err_invalid');
    incomeInput.focus();
    return;
  }
  if (income > 1e12) {
    errorMsg.textContent = t('err_large');
    return;
  }

  renderResult(calculate({ income, currency, adults, children }), currency);
});

// =============================================================================
// INIT
// =============================================================================

applyLanguage();
