import persistedStore from '@ekwoka/persistedstore'
import RIAS from '@ekwoka/x-rias'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import trap from '@alpinejs/trap/src'

const RIASconfig = {
    key: 'dmaoqyvwt',
    autoSize: true
}

export default Plugins = [persistedStore, RIAS(RIASconfig), trap]