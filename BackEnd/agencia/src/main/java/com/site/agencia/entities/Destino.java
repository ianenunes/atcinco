package com.site.agencia.entities;

import java.io.Serializable;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Destino implements Serializable  {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Destino;
	private String localidade;
	private String ida;
	private String volta;
	private double valor;
	
	@ManyToOne
	@JoinColumn(name = "ClienteId_cliente")
	private Cliente cliente;

	public Destino() {
		super();
	}

	public Destino(Long id_destino, String localidade, String ida, String volta, double valor, Cliente cliente) {
		super();
		Id_Destino = id_destino;
		this.localidade = localidade;
		this.ida = ida;
		this.volta = volta;
		this.valor = valor;
		this.cliente = cliente;
	}

	public Long getId_destino() {
		return Id_Destino;
	}

	public void setId_destino(Long id_destino) {
		Id_Destino = id_destino;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getIda() {
		return ida;
	}

	public void setIda(String ida) {
		this.ida = ida;
	}

	public String getVolta() {
		return volta;
	}

	public void setVolta(String volta) {
		this.volta = volta;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(Id_Destino, other.Id_Destino);
	}
	
	

}
