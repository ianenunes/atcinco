package com.site.agencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cliente implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_cliente;
	private String nome;
	private String endereco;
	private String email;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	private List<Destino> destinos = new ArrayList<Destino>(); 
	
	

	public Cliente() {
		super();
	}

	public Cliente(Long id_cliente, String nome, String endereco, String email) {
		super();
		this.Id_cliente = id_cliente;
		this.nome = nome;
		this.endereco = endereco;
		this.email = email;
	}

	public Long getId_cliente() {
		return Id_cliente;
	}

	public void setId_cliente(Long id_cliente) {
		Id_cliente = id_cliente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
		
	}
	
	public List<Destino> getDestinos() {
		return destinos;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_cliente);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(Id_cliente, other.Id_cliente);
	}
	

}
