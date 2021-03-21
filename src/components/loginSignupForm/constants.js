export const validation = {
  username: {
    rules: [
      { id: "REQUIRED", message: "Email is Required" },
      { id: "EMAIL", message: "Value is not valid" },
    ],
  },
  password: {
    rules: [{ id: "REQUIRED", message: "Password is Required" }],
  },
  firstName: {
    rules: [
      { id: "REQUIRED", message: "First Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  lastName: {
    rules: [
      { id: "REQUIRED", message: "Last Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  city: {
    rules: [
      { id: "REQUIRED", message: "City Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  state: {
    rules: [
      { id: "REQUIRED", message: "State Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  zip: {
    rules: [
      { id: "REQUIRED", message: "Zip Code is Required" },
      { id: "ZIP_CODE", message: "Only Numbers and '-' are Allowed" },
    ],
  },
};
export const countriesList = [
  { name: "Afghanistan", phone: "93", code: "AFG" },
  { name: "Albania", phone: "355", code: "ALB" },
  { name: "Algeria", phone: "213", code: "DZA" },
  { name: "American Samoa", phone: "1-684", code: "ASM" },
  { name: "Andorra", phone: "376", code: "AND" },
  { name: "Angola", phone: "244", code: "AGO" },
  { name: "Anguilla", phone: "1-264", code: "AIA" },
  { name: "Antarctica", phone: "672", code: "ATA" },
  { name: "Antigua and Barbuda", phone: "1-268", code: "ATG" },
  { name: "Argentina", phone: "54", code: "ARG" },
  { name: "Armenia", phone: "374", code: "ARM" },
  { name: "Aruba", phone: "297", code: "ABW" },
  { name: "Australia", phone: "61", code: "AUS" },
  { name: "Austria", phone: "43", code: "AUT" },
  { name: "Azerbaijan", phone: "994", code: "AZE" },
  { name: "Bahamas", phone: "1-242", code: "BHS" },
  { name: "Bahrain", phone: "973", code: "BHR" },
  { name: "Bangladesh", phone: "880", code: "BGD" },
  { name: "Barbados", phone: "1-246", code: "BRB" },
  { name: "Belarus", phone: "375", code: "BLR" },
  { name: "Belgium", phone: "32", code: "BEL" },
  { name: "Belize", phone: "501", code: "BLZ" },
  { name: "Benin", phone: "229", code: "BEN" },
  { name: "Bermuda", phone: "1-441", code: "BMU" },
  { name: "Bhutan", phone: "975", code: "BTN" },
  { name: "Bolivia", phone: "591", code: "BOL" },
  { name: "Bosnia and Herzegovina", phone: "387", code: "BIH" },
  { name: "Botswana", phone: "267", code: "BWA" },
  { name: "Brazil", phone: "55", code: "BRA" },
  { name: "British Indian Ocean Territory", phone: "246", code: "IOT" },
  { name: "British Virgin Islands", phone: "1-284", code: "VGB" },
  { name: "Brunei", phone: "673", code: "BRN" },
  { name: "Bulgaria", phone: "359", code: "BGR" },
  { name: "Burkina Faso", phone: "226", code: "BFA" },
  { name: "Burundi", phone: "257", code: "BDI" },
  { name: "Cambodia", phone: "855", code: "KHM" },
  { name: "Cameroon", phone: "237", code: "CMR" },
  { name: "Canada", phone: "1", code: "CAN" },
  { name: "Cape Verde", phone: "238", code: "CPV" },
  { name: "Cayman Islands", phone: "1-345", code: "CYM" },
  { name: "Central African Republic", phone: "236", code: "CAF" },
  { name: "Chad", phone: "235", code: "TCD" },
  { name: "Chile", phone: "56", code: "CHL" },
  { name: "China", phone: "86", code: "CHN" },
  { name: "Christmas Island", phone: "61", code: "CXR" },
  { name: "Cocos Islands", phone: "61", code: "CCK" },
  { name: "Colombia", phone: "57", code: "COL" },
  { name: "Comoros", phone: "269", code: "COM" },
  { name: "Cook Islands", phone: "682", code: "COK" },
  { name: "Costa Rica", phone: "506", code: "CRI" },
  { name: "Croatia", phone: "385", code: "HRV" },
  { name: "Cuba", phone: "53", code: "CUB" },
  { name: "Curacao", phone: "599", code: "CUW" },
  { name: "Cyprus", phone: "357", code: "CYP" },
  { name: "Czech Republic", phone: "420", code: "CZE" },
  { name: "Democratic Republic of the Congo", phone: "243", code: "COD" },
  { name: "Denmark", phone: "45", code: "DNK" },
  { name: "Djibouti", phone: "253", code: "DJI" },
  { name: "Dominica", phone: "1-767", code: "DMA" },
  { name: "Dominican Republic", phone: "1-809, 1-829, 1-849", code: "DOM" },
  { name: "East Timor", phone: "670", code: "TLS" },
  { name: "Ecuador", phone: "593", code: "ECU" },
  { name: "Egypt", phone: "20", code: "EGY" },
  { name: "El Salvador", phone: "503", code: "SLV" },
  { name: "Equatorial Guinea", phone: "240", code: "GNQ" },
  { name: "Eritrea", phone: "291", code: "ERI" },
  { name: "Estonia", phone: "372", code: "EST" },
  { name: "Ethiopia", phone: "251", code: "ETH" },
  { name: "Falkland Islands", phone: "500", code: "FLK" },
  { name: "Faroe Islands", phone: "298", code: "FRO" },
  { name: "Fiji", phone: "679", code: "FJI" },
  { name: "Finland", phone: "358", code: "FIN" },
  { name: "France", phone: "33", code: "FRA" },
  { name: "French Polynesia", phone: "689", code: "PYF" },
  { name: "Gabon", phone: "241", code: "GAB" },
  { name: "Gambia", phone: "220", code: "GMB" },
  { name: "Georgia", phone: "995", code: "GEO" },
  { name: "Germany", phone: "49", code: "DEU" },
  { name: "Ghana", phone: "233", code: "GHA" },
  { name: "Gibraltar", phone: "350", code: "GIB" },
  { name: "Greece", phone: "30", code: "GRC" },
  { name: "Greenland", phone: "299", code: "GRL" },
  { name: "Grenada", phone: "1-473", code: "GRD" },
  { name: "Guam", phone: "1-671", code: "GUM" },
  { name: "Guatemala", phone: "502", code: "GTM" },
  { name: "Guernsey", phone: "44-1481", code: "GGY" },
  { name: "Guinea", phone: "224", code: "GIN" },
  { name: "Guinea-Bissau", phone: "245", code: "GNB" },
  { name: "Guyana", phone: "592", code: "GUY" },
  { name: "Haiti", phone: "509", code: "HTI" },
  { name: "Honduras", phone: "504", code: "HND" },
  { name: "Hong Kong", phone: "852", code: "HKG" },
  { name: "Hungary", phone: "36", code: "HUN" },
  { name: "Iceland", phone: "354", code: "ISL" },
  { name: "India", phone: "91", code: "IND" },
  { name: "Indonesia", phone: "62", code: "IDN" },
  { name: "Iran", phone: "98", code: "IRN" },
  { name: "Iraq", phone: "964", code: "IRQ" },
  { name: "Ireland", phone: "353", code: "IRL" },
  { name: "Isle of Man", phone: "44-1624", code: "IMN" },
  { name: "Israel", phone: "972", code: "ISR" },
  { name: "Italy", phone: "39", code: "ITA" },
  { name: "Ivory Coast", phone: "225", code: "CIV" },
  { name: "Jamaica", phone: "1-876", code: "JAM" },
  { name: "Japan", phone: "81", code: "JPN" },
  { name: "Jersey", phone: "44-1534", code: "JEY" },
  { name: "Jordan", phone: "962", code: "JOR" },
  { name: "Kazakhstan", phone: "7", code: "KAZ" },
  { name: "Kenya", phone: "254", code: "KEN" },
  { name: "Kiribati", phone: "686", code: "KIR" },
  { name: "Kosovo", phone: "383", code: "XKX" },
  { name: "Kuwait", phone: "965", code: "KWT" },
  { name: "Kyrgyzstan", phone: "996", code: "KGZ" },
  { name: "Laos", phone: "856", code: "LAO" },
  { name: "Latvia", phone: "371", code: "LVA" },
  { name: "Lebanon", phone: "961", code: "LBN" },
  { name: "Lesotho", phone: "266", code: "LSO" },
  { name: "Liberia", phone: "231", code: "LBR" },
  { name: "Libya", phone: "218", code: "LBY" },
  { name: "Liechtenstein", phone: "423", code: "LIE" },
  { name: "Lithuania", phone: "370", code: "LTU" },
  { name: "Luxembourg", phone: "352", code: "LUX" },
  { name: "Macau", phone: "853", code: "MAC" },
  { name: "Macedonia", phone: "389", code: "MKD" },
  { name: "Madagascar", phone: "261", code: "MDG" },
  { name: "Malawi", phone: "265", code: "MWI" },
  { name: "Malaysia", phone: "60", code: "MYS" },
  { name: "Maldives", phone: "960", code: "MDV" },
  { name: "Mali", phone: "223", code: "MLI" },
  { name: "Malta", phone: "356", code: "MLT" },
  { name: "Marshall Islands", phone: "692", code: "MHL" },
  { name: "Mauritania", phone: "222", code: "MRT" },
  { name: "Mauritius", phone: "230", code: "MUS" },
  { name: "Mayotte", phone: "262", code: "MYT" },
  { name: "Mexico", phone: "52", code: "MEX" },
  { name: "Micronesia", phone: "691", code: "FSM" },
  { name: "Moldova", phone: "373", code: "MDA" },
  { name: "Monaco", phone: "377", code: "MCO" },
  { name: "Mongolia", phone: "976", code: "MNG" },
  { name: "Montenegro", phone: "382", code: "MNE" },
  { name: "Montserrat", phone: "1-664", code: "MSR" },
  { name: "Morocco", phone: "212", code: "MAR" },
  { name: "Mozambique", phone: "258", code: "MOZ" },
  { name: "Myanmar", phone: "95", code: "MMR" },
  { name: "Namibia", phone: "264", code: "NAM" },
  { name: "Nauru", phone: "674", code: "NRU" },
  { name: "Nepal", phone: "977", code: "NPL" },
  { name: "Netherlands", phone: "31", code: "NLD" },
  { name: "Netherlands Antilles", phone: "599", code: "ANT" },
  { name: "New Caledonia", phone: "687", code: "NCL" },
  { name: "New Zealand", phone: "64", code: "NZL" },
  { name: "Nicaragua", phone: "505", code: "NIC" },
  { name: "Niger", phone: "227", code: "NER" },
  { name: "Nigeria", phone: "234", code: "NGA" },
  { name: "Niue", phone: "683", code: "NIU" },
  { name: "North Korea", phone: "850", code: "PRK" },
  { name: "Northern Mariana Islands", phone: "1-670", code: "MNP" },
  { name: "Norway", phone: "47", code: "NOR" },
  { name: "Oman", phone: "968", code: "OMN" },
  { name: "Pakistan", phone: "92", code: "PAK" },
  { name: "Palau", phone: "680", code: "PLW" },
  { name: "Palestine", phone: "970", code: "PSE" },
  { name: "Panama", phone: "507", code: "PAN" },
  { name: "Papua New Guinea", phone: "675", code: "PNG" },
  { name: "Paraguay", phone: "595", code: "PRY" },
  { name: "Peru", phone: "51", code: "PER" },
  { name: "Philippines", phone: "63", code: "PHL" },
  { name: "Pitcairn", phone: "64", code: "PCN" },
  { name: "Poland", phone: "48", code: "POL" },
  { name: "Portugal", phone: "351", code: "PRT" },
  { name: "Puerto Rico", phone: "1-787, 1-939", code: "PRI" },
  { name: "Qatar", phone: "974", code: "QAT" },
  { name: "Republic of the Congo", phone: "242", code: "COG" },
  { name: "Reunion", phone: "262", code: "REU" },
  { name: "Romania", phone: "40", code: "ROU" },
  { name: "Russia", phone: "7", code: "RUS" },
  { name: "Rwanda", phone: "250", code: "RWA" },
  { name: "Saint Barthelemy", phone: "590", code: "BLM" },
  { name: "Saint Helena", phone: "290", code: "SHN" },
  { name: "Saint Kitts and Nevis", phone: "1-869", code: "KNA" },
  { name: "Saint Lucia", phone: "1-758", code: "LCA" },
  { name: "Saint Martin", phone: "590", code: "MAF" },
  { name: "Saint Pierre and Miquelon", phone: "508", code: "SPM" },
  { name: "Saint Vincent and the Grenadines", phone: "1-784", code: "VCT" },
  { name: "Samoa", phone: "685", code: "WSM" },
  { name: "San Marino", phone: "378", code: "SMR" },
  { name: "Sao Tome and Principe", phone: "239", code: "STP" },
  { name: "Saudi Arabia", phone: "966", code: "SAU" },
  { name: "Senegal", phone: "221", code: "SEN" },
  { name: "Serbia", phone: "381", code: "SRB" },
  { name: "Seychelles", phone: "248", code: "SYC" },
  { name: "Sierra Leone", phone: "232", code: "SLE" },
  { name: "Singapore", phone: "65", code: "SGP" },
  { name: "Sint Maarten", phone: "1-721", code: "SXM" },
  { name: "Slovakia", phone: "421", code: "SVK" },
  { name: "Slovenia", phone: "386", code: "SVN" },
  { name: "Solomon Islands", phone: "677", code: "SLB" },
  { name: "Somalia", phone: "252", code: "SOM" },
  { name: "South Africa", phone: "27", code: "ZAF" },
  { name: "South Korea", phone: "82", code: "KOR" },
  { name: "South Sudan", phone: "211", code: "SSD" },
  { name: "Spain", phone: "34", code: "ESP" },
  { name: "Sri Lanka", phone: "94", code: "LKA" },
  { name: "Sudan", phone: "249", code: "SDN" },
  { name: "Suriname", phone: "597", code: "SUR" },
  { name: "Svalbard and Jan Mayen", phone: "47", code: "SJM" },
  { name: "Swaziland", phone: "268", code: "SWZ" },
  { name: "Sweden", phone: "46", code: "SWE" },
  { name: "Switzerland", phone: "41", code: "CHE" },
  { name: "Syria", phone: "963", code: "SYR" },
  { name: "Taiwan", phone: "886", code: "TWN" },
  { name: "Tajikistan", phone: "992", code: "TJK" },
  { name: "Tanzania", phone: "255", code: "TZA" },
  { name: "Thailand", phone: "66", code: "THA" },
  { name: "Togo", phone: "228", code: "TGO" },
  { name: "Tokelau", phone: "690", code: "TKL" },
  { name: "Tonga", phone: "676", code: "TON" },
  { name: "Trinidad and Tobago", phone: "1-868", code: "TTO" },
  { name: "Tunisia", phone: "216", code: "TUN" },
  { name: "Turkey", phone: "90", code: "TUR" },
  { name: "Turkmenistan", phone: "993", code: "TKM" },
  { name: "Turks and Caicos Islands", phone: "1-649", code: "TCA" },
  { name: "Tuvalu", phone: "688", code: "TUV" },
  { name: "U.S. Virgin Islands", phone: "1-340", code: "VIR" },
  { name: "Uganda", phone: "256", code: "UGA" },
  { name: "Ukraine", phone: "380", code: "UKR" },
  { name: "United Arab Emirates", phone: "971", code: "ARE" },
  { name: "United Kingdom", phone: "44", code: "GBR" },
  { name: "United States", phone: "1", code: "USA" },
  { name: "Uruguay", phone: "598", code: "URY" },
  { name: "Uzbekistan", phone: "998", code: "UZB" },
  { name: "Vanuatu", phone: "678", code: "VUT" },
  { name: "Vatican", phone: "379", code: "VAT" },
  { name: "Venezuela", phone: "58", code: "VEN" },
  { name: "Vietnam", phone: "84", code: "VNM" },
  { name: "Wallis and Futuna", phone: "681", code: "WLF" },
  { name: "Western Sahara", phone: "212", code: "ESH" },
  { name: "Yemen", phone: "967", code: "YEM" },
  { name: "Zambia", phone: "260", code: "ZMB" },
  { name: "Zimbabwe", phone: "263", code: "ZWE" },
];

// export const countryList = [
//   { country: "Afghanistan", code: "93" },
//   { country: "Albania", code: "355" },
//   { country: "Algeria", code: "213" },
//   { country: "American Samoa", code: "1-684" },
//   { country: "Andorra", code: "376" },
//   { country: "Angola", code: "244" },
//   { country: "Anguilla", code: "1-264" },
//   { country: "Antarctica", code: "672" },
//   { country: "Antigua and Barbuda", code: "1-268" },
//   { country: "Argentina", code: "54" },
//   { country: "Armenia", code: "374" },
//   { country: "Aruba", code: "297" },
//   { country: "Australia", code: "61" },
//   { country: "Austria", code: "43" },
//   { country: "Azerbaijan", code: "994" },
//   { country: "Bahamas", code: "1-242" },
//   { country: "Bahrain", code: "973" },
//   { country: "Bangladesh", code: "880" },
//   { country: "Barbados", code: "1-246" },
//   { country: "Belarus", code: "375" },
//   { country: "Belgium", code: "32" },
//   { country: "Belize", code: "501" },
//   { country: "Benin", code: "229" },
//   { country: "Bermuda", code: "1-441" },
//   { country: "Bhutan", code: "975" },
//   { country: "Bolivia", code: "591" },
//   { country: "Bosnia and Herzegovina", code: "387" },
//   { country: "Botswana", code: "267" },
//   { country: "Brazil", code: "55" },
//   { country: "British Indian Ocean Territory", code: "246" },
//   { country: "British Virgin Islands", code: "1-284" },
//   { country: "Brunei", code: "673" },
//   { country: "Bulgaria", code: "359" },
//   { country: "Burkina Faso", code: "226" },
//   { country: "Burundi", code: "257" },
//   { country: "Cambodia", code: "855" },
//   { country: "Cameroon", code: "237" },
//   { country: "Canada", code: "1" },
//   { country: "Cape Verde", code: "238" },
//   { country: "Cayman Islands", code: "1-345" },
//   { country: "Central African Republic", code: "236" },
//   { country: "Chad", code: "235" },
//   { country: "Chile", code: "56" },
//   { country: "China", code: "86" },
//   { country: "Christmas Island", code: "61" },
//   { country: "Cocos Islands", code: "61" },
//   { country: "Colombia", code: "57" },
//   { country: "Comoros", code: "269" },
//   { country: "Cook Islands", code: "682" },
//   { country: "Costa Rica", code: "506" },
//   { country: "Croatia", code: "385" },
//   { country: "Cuba", code: "53" },
//   { country: "Curacao", code: "599" },
//   { country: "Cyprus", code: "357" },
//   { country: "Czech Republic", code: "420" },
//   { country: "Democratic Republic of the Congo", code: "243" },
//   { country: "Denmark", code: "45" },
//   { country: "Djibouti", code: "253" },
//   { country: "Dominica", code: "1-767" },
//   { country: "Dominican Republic", code: "1-809, 1-829, 1-849" },
//   { country: "East Timor", code: "670" },
//   { country: "Ecuador", code: "593" },
//   { country: "Egypt", code: "20" },
//   { country: "El Salvador", code: "503" },
//   { country: "Equatorial Guinea", code: "240" },
//   { country: "Eritrea", code: "291" },
//   { country: "Estonia", code: "372" },
//   { country: "Ethiopia", code: "251" },
//   { country: "Falkland Islands", code: "500" },
//   { country: "Faroe Islands", code: "298" },
//   { country: "Fiji", code: "679" },
//   { country: "Finland", code: "358" },
//   { country: "France", code: "33" },
//   { country: "French Polynesia", code: "689" },
//   { country: "Gabon", code: "241" },
//   { country: "Gambia", code: "220" },
//   { country: "Georgia", code: "995" },
//   { country: "Germany", code: "49" },
//   { country: "Ghana", code: "233" },
//   { country: "Gibraltar", code: "350" },
//   { country: "Greece", code: "30" },
//   { country: "Greenland", code: "299" },
//   { country: "Grenada", code: "1-473" },
//   { country: "Guam", code: "1-671" },
//   { country: "Guatemala", code: "502" },
//   { country: "Guernsey", code: "44-1481" },
//   { country: "Guinea", code: "224" },
//   { country: "Guinea-Bissau", code: "245" },
//   { country: "Guyana", code: "592" },
//   { country: "Haiti", code: "509" },
//   { country: "Honduras", code: "504" },
//   { country: "Hong Kong", code: "852" },
//   { country: "Hungary", code: "36" },
//   { country: "Iceland", code: "354" },
//   { country: "India", code: "91" },
//   { country: "Indonesia", code: "62" },
//   { country: "Iran", code: "98" },
//   { country: "Iraq", code: "964" },
//   { country: "Ireland", code: "353" },
//   { country: "Isle of Man", code: "44-1624" },
//   { country: "Israel", code: "972" },
//   { country: "Italy", code: "39" },
//   { country: "Ivory Coast", code: "225" },
//   { country: "Jamaica", code: "1-876" },
//   { country: "Japan", code: "81" },
//   { country: "Jersey", code: "44-1534" },
//   { country: "Jordan", code: "962" },
//   { country: "Kazakhstan", code: "7" },
//   { country: "Kenya", code: "254" },
//   { country: "Kiribati", code: "686" },
//   { country: "Kosovo", code: "383" },
//   { country: "Kuwait", code: "965" },
//   { country: "Kyrgyzstan", code: "996" },
//   { country: "Laos", code: "856" },
//   { country: "Latvia", code: "371" },
//   { country: "Lebanon", code: "961" },
//   { country: "Lesotho", code: "266" },
//   { country: "Liberia", code: "231" },
//   { country: "Libya", code: "218" },
//   { country: "Liechtenstein", code: "423" },
//   { country: "Lithuania", code: "370" },
//   { country: "Luxembourg", code: "352" },
//   { country: "Macau", code: "853" },
//   { country: "Macedonia", code: "389" },
//   { country: "Madagascar", code: "261" },
//   { country: "Malawi", code: "265" },
//   { country: "Malaysia", code: "60" },
//   { country: "Maldives", code: "960" },
//   { country: "Mali", code: "223" },
//   { country: "Malta", code: "356" },
//   { country: "Marshall Islands", code: "692" },
//   { country: "Mauritania", code: "222" },
//   { country: "Mauritius", code: "230" },
//   { country: "Mayotte", code: "262" },
//   { country: "Mexico", code: "52" },
//   { country: "Micronesia", code: "691" },
//   { country: "Moldova", code: "373" },
//   { country: "Monaco", code: "377" },
//   { country: "Mongolia", code: "976" },
//   { country: "Montenegro", code: "382" },
//   { country: "Montserrat", code: "1-664" },
//   { country: "Morocco", code: "212" },
//   { country: "Mozambique", code: "258" },
//   { country: "Myanmar", code: "95" },
//   { country: "Namibia", code: "264" },
//   { country: "Nauru", code: "674" },
//   { country: "Nepal", code: "977" },
//   { country: "Netherlands", code: "31" },
//   { country: "Netherlands Antilles", code: "599" },
//   { country: "New Caledonia", code: "687" },
//   { country: "New Zealand", code: "64" },
//   { country: "Nicaragua", code: "505" },
//   { country: "Niger", code: "227" },
//   { country: "Nigeria", code: "234" },
//   { country: "Niue", code: "683" },
//   { country: "North Korea", code: "850" },
//   { country: "Northern Mariana Islands", code: "1-670" },
//   { country: "Norway", code: "47" },
//   { country: "Oman", code: "968" },
//   { country: "Pakistan", code: "92" },
//   { country: "Palau", code: "680" },
//   { country: "Palestine", code: "970" },
//   { country: "Panama", code: "507" },
//   { country: "Papua New Guinea", code: "675" },
//   { country: "Paraguay", code: "595" },
//   { country: "Peru", code: "51" },
//   { country: "Philippines", code: "63" },
//   { country: "Pitcairn", code: "64" },
//   { country: "Poland", code: "48" },
//   { country: "Portugal", code: "351" },
//   { country: "Puerto Rico", code: "1-787, 1-939" },
//   { country: "Qatar", code: "974" },
//   { country: "Republic of the Congo", code: "242" },
//   { country: "Reunion", code: "262" },
//   { country: "Romania", code: "40" },
//   { country: "Russia", code: "7" },
//   { country: "Rwanda", code: "250" },
//   { country: "Saint Barthelemy", code: "590" },
//   { country: "Saint Helena", code: "290" },
//   { country: "Saint Kitts and Nevis", code: "1-869" },
//   { country: "Saint Lucia", code: "1-758" },
//   { country: "Saint Martin", code: "590" },
//   { country: "Saint Pierre and Miquelon", code: "508" },
//   { country: "Saint Vincent and the Grenadines", code: "1-784" },
//   { country: "Samoa", code: "685" },
//   { country: "San Marino", code: "378" },
//   { country: "Sao Tome and Principe", code: "239" },
//   { country: "Saudi Arabia", code: "966" },
//   { country: "Senegal", code: "221" },
//   { country: "Serbia", code: "381" },
//   { country: "Seychelles", code: "248" },
//   { country: "Sierra Leone", code: "232" },
//   { country: "Singapore", code: "65" },
//   { country: "Sint Maarten", code: "1-721" },
//   { country: "Slovakia", code: "421" },
//   { country: "Slovenia", code: "386" },
//   { country: "Solomon Islands", code: "677" },
//   { country: "Somalia", code: "252" },
//   { country: "South Africa", code: "27" },
//   { country: "South Korea", code: "82" },
//   { country: "South Sudan", code: "211" },
//   { country: "Spain", code: "34" },
//   { country: "Sri Lanka", code: "94" },
//   { country: "Sudan", code: "249" },
//   { country: "Suriname", code: "597" },
//   { country: "Svalbard and Jan Mayen", code: "47" },
//   { country: "Swaziland", code: "268" },
//   { country: "Sweden", code: "46" },
//   { country: "Switzerland", code: "41" },
//   { country: "Syria", code: "963" },
//   { country: "Taiwan", code: "886" },
//   { country: "Tajikistan", code: "992" },
//   { country: "Tanzania", code: "255" },
//   { country: "Thailand", code: "66" },
//   { country: "Togo", code: "228" },
//   { country: "Tokelau", code: "690" },
//   { country: "Tonga", code: "676" },
//   { country: "Trinidad and Tobago", code: "1-868" },
//   { country: "Tunisia", code: "216" },
//   { country: "Turkey", code: "90" },
//   { country: "Turkmenistan", code: "993" },
//   { country: "Turks and Caicos Islands", code: "1-649" },
//   { country: "Tuvalu", code: "688" },
//   { country: "U.S. Virgin Islands", code: "1-340" },
//   { country: "Uganda", code: "256" },
//   { country: "Ukraine", code: "380" },
//   { country: "United Arab Emirates", code: "971" },
//   { country: "United Kingdom", code: "44" },
//   { country: "United States", code: "1" },
//   { country: "Uruguay", code: "598" },
//   { country: "Uzbekistan", code: "998" },
//   { country: "Vanuatu", code: "678" },
//   { country: "Vatican", code: "379" },
//   { country: "Venezuela", code: "58" },
//   { country: "Vietnam", code: "84" },
//   { country: "Wallis and Futuna", code: "681" },
//   { country: "Western Sahara", code: "212" },
//   { country: "Yemen", code: "967" },
//   { country: "Zambia", code: "260" },
//   { country: "Zimbabwe", code: "263" },
// ];

// export const codes = [
//   "93",
//   "355",
//   "213",
//   "1-684",
//   "376",
//   "244",
//   "1-264",
//   "672",
//   "1-268",
//   "54",
//   "374",
//   "297",
//   "61",
//   "43",
//   "994",
//   "1-242",
//   "973",
//   "880",
//   "1-246",
//   "375",
//   "32",
//   "501",
//   "229",
//   "1-441",
//   "975",
//   "591",
//   "387",
//   "267",
//   "55",
//   "246",
//   "1-284",
//   "673",
//   "359",
//   "226",
//   "257",
//   "855",
//   "237",
//   "1",
//   "238",
//   "1-345",
//   "236",
//   "235",
//   "56",
//   "86",
//   "61",
//   "61",
//   "57",
//   "269",
//   "682",
//   "506",
//   "385",
//   "53",
//   "599",
//   "357",
//   "420",
//   "243",
//   "45",
//   "253",
//   "1-767",
//   "1-809, 1-829, 1-849",
//   "670",
//   "593",
//   "20",
//   "503",
//   "240",
//   "291",
//   "372",
//   "251",
//   "500",
//   "298",
//   "679",
//   "358",
//   "33",
//   "689",
//   "241",
//   "220",
//   "995",
//   "49",
//   "233",
//   "350",
//   "30",
//   "299",
//   "1-473",
//   "1-671",
//   "502",
//   "44-1481",
//   "224",
//   "245",
//   "592",
//   "509",
//   "504",
//   "852",
//   "36",
//   "354",
//   "91",
//   "62",
//   "98",
//   "964",
//   "353",
//   "44-1624",
//   "972",
//   "39",
//   "225",
//   "1-876",
//   "81",
//   "44-1534",
//   "962",
//   "7",
//   "254",
//   "686",
//   "383",
//   "965",
//   "996",
//   "856",
//   "371",
//   "961",
//   "266",
//   "231",
//   "218",
//   "423",
//   "370",
//   "352",
//   "853",
//   "389",
//   "261",
//   "265",
//   "60",
//   "960",
//   "223",
//   "356",
//   "692",
//   "222",
//   "230",
//   "262",
//   "52",
//   "691",
//   "373",
//   "377",
//   "976",
//   "382",
//   "1-664",
//   "212",
//   "258",
//   "95",
//   "264",
//   "674",
//   "977",
//   "31",
//   "599",
//   "687",
//   "64",
//   "505",
//   "227",
//   "234",
//   "683",
//   "850",
//   "1-670",
//   "47",
//   "968",
//   "92",
//   "680",
//   "970",
//   "507",
//   "675",
//   "595",
//   "51",
//   "63",
//   "64",
//   "48",
//   "351",
//   "1-787, 1-939",
//   "974",
//   "242",
//   "262",
//   "40",
//   "7",
//   "250",
//   "590",
//   "290",
//   "1-869",
//   "1-758",
//   "590",
//   "508",
//   "1-784",
//   "685",
//   "378",
//   "239",
//   "966",
//   "221",
//   "381",
//   "248",
//   "232",
//   "65",
//   "1-721",
//   "421",
//   "386",
//   "677",
//   "252",
//   "27",
//   "82",
//   "211",
//   "34",
//   "94",
//   "249",
//   "597",
//   "47",
//   "268",
//   "46",
//   "41",
//   "963",
//   "886",
//   "992",
//   "255",
//   "66",
//   "228",
//   "690",
//   "676",
//   "1-868",
//   "216",
//   "90",
//   "993",
//   "1-649",
//   "688",
//   "1-340",
//   "256",
//   "380",
//   "971",
//   "44",
//   "1",
//   "598",
//   "998",
//   "678",
//   "379",
//   "58",
//   "84",
//   "681",
//   "212",
//   "967",
//   "260",
//   "263",
// ];

// export const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "American Samoa",
//   "Andorra",
//   "Angola",
//   "Anguilla",
//   "Antarctica",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Aruba",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bermuda",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "British Indian Ocean Territory",
//   "British Virgin Islands",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Cayman Islands",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Christmas Island",
//   "Cocos Islands",
//   "Colombia",
//   "Comoros",
//   "Cook Islands",
//   "Costa Rica",
//   "Croatia",
//   "Cuba",
//   "Curacao",
//   "Cyprus",
//   "Czech Republic",
//   "Democratic Republic of the Congo",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "East Timor",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands",
//   "Fiji",
//   "Finland",
//   "France",
//   "French Polynesia",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Gibraltar",
//   "Greece",
//   "Greenland",
//   "Grenada",
//   "Guam",
//   "Guatemala",
//   "Guernsey",
//   "Guinea",
//   "Guinea-Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hong Kong",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Isle of Man",
//   "Israel",
//   "Italy",
//   "Ivory Coast",
//   "Jamaica",
//   "Japan",
//   "Jersey",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Kosovo",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macau",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Mauritania",
//   "Mauritius",
//   "Mayotte",
//   "Mexico",
//   "Micronesia",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Montserrat",
//   "Morocco",
//   "Mozambique",
//   "Myanmar",
//   "Namibia",
//   "Nauru",
//   "Nepal",
//   "Netherlands",
//   "Netherlands Antilles",
//   "New Caledonia",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "Niue",
//   "North Korea",
//   "Northern Mariana Islands",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Palestine",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Pitcairn",
//   "Poland",
//   "Portugal",
//   "Puerto Rico",
//   "Qatar",
//   "Republic of the Congo",
//   "Reunion",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Barthelemy",
//   "Saint Helena",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Martin",
//   "Saint Pierre and Miquelon",
//   "Saint Vincent and the Grenadines",
//   "Samoa",
//   "San Marino",
//   "Sao Tome and Principe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Sint Maarten",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "South Korea",
//   "South Sudan",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Svalbard and Jan Mayen",
//   "Swaziland",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Togo",
//   "Tokelau",
//   "Tonga",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Turks and Caicos Islands",
//   "Tuvalu",
//   "U.S. Virgin Islands",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican",
//   "Venezuela",
//   "Vietnam",
//   "Wallis and Futuna",
//   "Western Sahara",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];
export const signupFormConfig = {
  formValid: false,
  fields: [
    {
      type: "TEXTBOX",
      controlId: "formBasicFullName",
      label: "Enter Full Name",
      placeholder: "Enter Full Name",
      controlType: "text",
      size: "lg",
      rules: [{ id: "REQUIRED", message: "Full Name is Required" }],
      valid: false,
      showValidationMessage: true,
    },
    {
      type: "TEXTBOX",
      controlId: "formBasicAddress",
      label: "Enter Address",
      placeholder: "Enter Address",
      controlType: "text",
      size: "lg",
      rules: [{ id: "REQUIRED", message: "Address is Required" }],
      valid: false,
      showValidationMessage: true,
    },
    {
      type: "TEXTBOX",
      controlId: "formBasicEmail",
      label: "Enter Email Address",
      placeholder: "Enter Email Address",
      controlType: "email",
      size: "lg",
      rules: [
        { id: "REQUIRED", message: "Email is Required" },
        { id: "EMAIL", message: "Value is not valid" },
      ],
      valid: false,
      showValidationMessage: true,
    },
    {
      type: "TEXTBOX",
      controlId: "formBasicPassword",
      label: "Enter Password",
      placeholder: "Enter Password",
      controlType: "password",
      size: "lg",
      rules: [{ id: "REQUIRED", message: "Password is Required" }],
      valid: false,
      showValidationMessage: true,
    },
  ],
};
