require 'pagy/extras/headers'
require "pagy/extras/bootstrap"
PAGE_SIZES = [10, 20, 30]
require "pagy/extras/overflow"
Pagy::DEFAULT[:overflow] = :last_page 
Pagy::DEFAULT[:items] = 10
Pagy::DEFAULT.freeze
