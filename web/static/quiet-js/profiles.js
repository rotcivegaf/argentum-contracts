var audible = {
	checksum_scheme: "crc32",
	inner_fec_scheme: "v27",
	outer_fec_scheme: "none",
	mod_scheme: "gmsk",
	frame_length: 25,
	modulation: {
		center_frequency: 4200,
		gain: 0.15
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 10,
		symbol_delay: 4,
		excess_bandwidth: 0.35
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	}
};
var ultrasonic = {
	mod_scheme: "gmsk",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v27",
	outer_fec_scheme: "none",
	frame_length: 34,
	modulation: {
		center_frequency: 19000,
		gain: 0.02
	},
	interpolation: {
		shape: "rrcos",
		samples_per_symbol: 14,
		symbol_delay: 4,
		excess_bandwidth: 0.35
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	}
};
var quietProfiles = {
	audible: audible,
	"audible-7k-channel-0": {
	mod_scheme: "arb16opt",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v29",
	outer_fec_scheme: "rs8",
	frame_length: 600,
	modulation: {
		center_frequency: 9200,
		gain: 0.01
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 6,
		symbol_delay: 4,
		excess_bandwidth: 0.31
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	},
	ofdm: {
		num_subcarriers: 48,
		cyclic_prefix_length: 8,
		taper_length: 4,
		left_band: 0,
		right_band: 0
	}
},
	"audible-7k-channel-1": {
	mod_scheme: "arb16opt",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v29",
	outer_fec_scheme: "rs8",
	frame_length: 600,
	modulation: {
		center_frequency: 15500,
		gain: 0.01
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 6,
		symbol_delay: 4,
		excess_bandwidth: 0.31
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	},
	ofdm: {
		num_subcarriers: 48,
		cyclic_prefix_length: 8,
		taper_length: 4,
		left_band: 0,
		right_band: 0
	}
},
	"cable-64k": {
	mod_scheme: "qam1024",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v27p23",
	outer_fec_scheme: "rs8",
	frame_length: 7500,
	modulation: {
		center_frequency: 10200,
		gain: 0.09
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 2,
		symbol_delay: 4,
		excess_bandwidth: 0.35
	},
	encoder_filters: {
		dc_filter_alpha: 0.03
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	},
	ofdm: {
		num_subcarriers: 128,
		cyclic_prefix_length: 16,
		taper_length: 8,
		left_band: 6,
		right_band: 12
	}
},
	"hello-world": {
	mod_scheme: "gmsk",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v27",
	outer_fec_scheme: "none",
	frame_length: 25,
	modulation: {
		center_frequency: 4400,
		gain: 0.08
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 20,
		symbol_delay: 4,
		excess_bandwidth: 0.38
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	}
},
	ultrasonic: ultrasonic,
	"ultrasonic-3600": {
	ofdm: {
		num_subcarriers: 64,
		cyclic_prefix_length: 20,
		taper_length: 8,
		left_band: 4,
		right_band: 13
	},
	mod_scheme: "V29",
	checksum_scheme: "crc8",
	inner_fec_scheme: "v27",
	outer_fec_scheme: "none",
	frame_length: 550,
	modulation: {
		center_frequency: 18500,
		gain: 0.01
	},
	interpolation: {
		shape: "kaiser",
		samples_per_symbol: 7,
		symbol_delay: 4,
		excess_bandwidth: 0.33
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	}
},
	"ultrasonic-whisper": {
	mod_scheme: "gmsk",
	checksum_scheme: "crc32",
	inner_fec_scheme: "v27",
	outer_fec_scheme: "none",
	frame_length: 16,
	modulation: {
		center_frequency: 19500,
		gain: 0.01
	},
	interpolation: {
		shape: "rrcos",
		samples_per_symbol: 30,
		symbol_delay: 4,
		excess_bandwidth: 0.35
	},
	encoder_filters: {
		dc_filter_alpha: 0.01
	},
	resampler: {
		delay: 13,
		bandwidth: 0.45,
		attenuation: 60,
		filter_bank_size: 64
	}
}
};

export default quietProfiles;
export { audible, ultrasonic };
