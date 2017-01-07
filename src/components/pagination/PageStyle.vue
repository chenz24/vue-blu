<style lang="scss">
.pagination{
  font-size: 13px;
  &.is-small{
  	font-size: 12px;
  }
  &.is-left{
    justify-content: flex-start;
  }
  &.is-right{
    justify-content: flex-end;
  }
  ul{
  	flex-grow: 0;
  	i{
  		line-height: 24px;
  	}
  	.is-small i{
  		line-height: 17px;
  	}
  }
  .btn-jumper{
  	width: 32px;
  	cursor: pointer;
  	a{
  		display:none;
  	}
  	&:after{
  		content: "\2022\2022\2022";
	    display: block;
	    letter-spacing: 2px;
	    color: #ccc;
	    text-align: center;
	    font-size: 12px;
	    font-family: Arial;
    	margin: 0 3px;
  	}
  	&:hover{
  		a{
  			display: block;
  		}
  		&:after{
  			display: none;
  		}
  	}
  }
  .input{
    display: inline-block;
    width: 45px;
    vertical-align: baseline;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
}
</style>
