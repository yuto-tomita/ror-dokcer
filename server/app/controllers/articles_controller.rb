class ArticlesController < ApplicationController
  def index
    logger.debug(params)
    render json: { message: params }
  end
end
