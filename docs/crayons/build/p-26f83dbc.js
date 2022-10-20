import{b as a,a as i,c as n,d as e}from"./p-1e4f6cab.js";var t={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar siegħa",other:"madwar {{count}} siegħat"},xHours:{one:"siegħa",other:"{{count}} siegħat"},xDays:{one:"ġurnata",other:"{{count}} ġranet"},aboutXWeeks:{one:"madwar ġimgħa",other:"madwar {{count}} ġimgħat"},xWeeks:{one:"ġimgħa",other:"{{count}} ġimgħat"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kważi sena",two:"kważi sentejn",other:"kważi {{count}} snin"}},r={date:a({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o={lastWeek:"eeee 'li għadda' 'fil-'p",yesterday:"'Il-bieraħ fil-'p",today:"'Illum fil-'p",tomorrow:"'Għada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"},l={code:"mt",formatDistance:function(a,i,n){n=n||{};var e,r=a.match(/years/i);return e="string"==typeof t[a]?t[a]:1===i?t[a].one:2===i&&r?t[a].two:t[a].other.replace("{{count}}",i),n.addSuffix?n.comparison>0?"f'"+e:e+" ilu":e},formatLong:r,formatRelative:function(a){return o[a]},localize:{ordinalNumber:function(a){return Number(a)+"º"},era:i({values:{narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:i({values:{narrow:["J","F","M","A","M","Ġ","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],wide:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"]},defaultWidth:"wide"}),day:i({values:{narrow:["Ħ","T","T","E","Ħ","Ġ","S"],short:["Ħa","Tn","Tl","Er","Ħa","Ġi","Si"],abbreviated:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],wide:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:n({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:e({matchPatterns:{narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(q|b)/i,/^(w|c)/i]},defaultParseWidth:"any"}),quarter:e({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:e({matchPatterns:{narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,wide:/^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^ġ/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^ġ/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:e({matchPatterns:{narrow:/^[ħteġs]/i,short:/^(ħa|tn|tl|er|ħa|ġi|si)/i,abbreviated:/^(ħad|tne|tli|erb|ħam|ġim|sib)/i,wide:/^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ħ/i,/^t/i,/^t/i,/^e/i,/^ħ/i,/^ġ/i,/^s/i],any:[/^(il-)?ħad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?ġi/i,/^(is-)?si/i]},defaultParseWidth:"any"}),dayPeriod:e({matchPatterns:{narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/għodwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filgħaxija/i,night:/lejl/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};export default l;